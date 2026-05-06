'use client';

import { useEffect, useRef, useState } from 'react';
import type L from 'leaflet';
import { Place } from '@/types';
import styles from './MapView.module.css';

const TOKYO: [number, number] = [35.6762, 139.6503];
const ZOOM = 12;

const COLORS: Record<string, string> = {
  city: '#0f172a',
  ward: '#1d4ed8',
  neighborhood: '#b91c1c',
  town: '#6d28d9',
};

const RADII: Record<string, number> = {
  city: 18,
  ward: 13,
  neighborhood: 7,
  town: 7,
};

// Build the Nominatim search string for a place
function nominatimQuery(place: Place): string {
  if (place.type === 'city') return '東京都';
  if (place.type === 'ward') return `${place.kanji}, 東京都, 日本`;
  return `${place.kanji}, ${place.ward ?? '東京都'}, 東京都, 日本`;
}

interface Props {
  places: Place[];
  selected: Place | null;
  onSelect: (p: Place) => void;
  query: string;
}

export default function MapView({ places, selected, onSelect, query }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.CircleMarker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Cache: place.id → raw GeoJSON feature (null = no polygon found)
  const boundaryCacheRef = useRef<Map<string, object | null>>(new Map());
  // The currently visible boundary layer
  const boundaryLayerRef = useRef<L.GeoJSON | null>(null);

  const [mapReady, setMapReady] = useState(false);

  // ── Init map once ─────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: TOKYO,
        zoom: ZOOM,
        zoomControl: true,
      });
      mapRef.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      setMapReady(true);
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
      setMapReady(false);
    };
  }, []);

  // ── Sync markers whenever places or map readiness changes ─────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;

    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current) return;

      markersRef.current.forEach((m) => m.remove());
      markersRef.current.clear();

      places.forEach((place) => {
        const color = COLORS[place.type] ?? COLORS.neighborhood;
        const radius = RADII[place.type] ?? RADII.neighborhood;

        const marker = L.circleMarker(place.coordinates, {
          radius,
          fillColor: color,
          fillOpacity: 0.85,
          color: '#ffffff',
          weight: 1.5,
        }).addTo(mapRef.current!);

        const tooltip = L.tooltip({
          direction: 'top',
          offset: L.point(0, -(radius + 6)),
          opacity: 1,
          className: styles.tooltip,
        }).setContent(
          `<span class="${styles.tooltipKanji}">${place.kanji}</span><span class="${styles.tooltipRomaji}">${place.romaji}</span>`
        );

        marker.bindTooltip(tooltip);
        marker.on('click', () => onSelectRef.current(place));
        markersRef.current.set(place.id, marker);
      });
    });

    return () => { cancelled = true; };
  }, [mapReady, places]);

  // ── Highlight selected marker + fly to it ────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    let cancelled = false;

    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current) return;

      markersRef.current.forEach((marker, id) => {
        const place = places.find((p) => p.id === id);
        if (!place) return;
        const color = COLORS[place.type] ?? COLORS.neighborhood;
        const radius = RADII[place.type] ?? RADII.neighborhood;
        const isSelected = selected?.id === id;

        marker.setStyle({
          fillColor: color,
          fillOpacity: isSelected ? 1 : 0.85,
          color: isSelected ? color : '#ffffff',
          weight: isSelected ? 3 : 1.5,
        });
        marker.setRadius(isSelected ? radius * 1.45 : radius);
      });

      // Zoom is handled by the boundary effect once the polygon arrives.
      // No flyTo here — avoids a double-animation when the boundary loads fast.
    });

    return () => { cancelled = true; };
  }, [selected, places, mapReady]);

  // ── Boundary polygon for selected place ───────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;

    let cancelled = false;

    async function loadBoundary() {
      const L = (await import('leaflet')).default ?? await import('leaflet');

      // Remove previous boundary
      if (boundaryLayerRef.current) {
        boundaryLayerRef.current.remove();
        boundaryLayerRef.current = null;
      }

      if (cancelled || !selected || !mapRef.current) return;

      // Serve from cache if available
      if (boundaryCacheRef.current.has(selected.id)) {
        const cached = boundaryCacheRef.current.get(selected.id);
        if (cached) {
          addBoundary(L, cached, selected);
        } else {
          fallbackFlyTo(selected);
        }
        return;
      }

      // Fetch from Nominatim (free, no key required)
      const q = nominatimQuery(selected);
      const url =
        `https://nominatim.openstreetmap.org/search` +
        `?q=${encodeURIComponent(q)}` +
        `&format=geojson&polygon_geojson=1&limit=5&countrycodes=jp`;

      try {
        const res = await fetch(url);
        if (cancelled) return;
        const data = await res.json();

        const feature =
          (data.features as Array<{ geometry: { type: string } }>)?.find(
            (f) =>
              f.geometry?.type === 'Polygon' ||
              f.geometry?.type === 'MultiPolygon'
          ) ?? null;

        boundaryCacheRef.current.set(selected.id, feature);

        if (cancelled) return;
        if (feature && mapRef.current) {
          addBoundary(L, feature, selected);
        } else {
          fallbackFlyTo(selected);
        }
      } catch {
        boundaryCacheRef.current.set(selected.id, null);
        if (!cancelled) fallbackFlyTo(selected);
      }
    }

    function addBoundary(
      L: typeof import('leaflet'),
      feature: object,
      place: Place
    ) {
      if (!mapRef.current) return;
      const color = COLORS[place.type] ?? COLORS.neighborhood;

      const layer = L.geoJSON(feature as Parameters<typeof L.geoJSON>[0], {
        style: {
          color,
          weight: 2,
          fillColor: color,
          fillOpacity: 0.07,
          dashArray: '6 5',
          lineCap: 'round',
          lineJoin: 'round',
        },
      }).addTo(mapRef.current);

      layer.bringToBack();
      boundaryLayerRef.current = layer;

      // Fit the map to the full boundary extent
      mapRef.current.flyToBounds(layer.getBounds(), {
        padding: [50, 50],
        maxZoom: 16,
        duration: 0.8,
      });
    }

    function fallbackFlyTo(place: Place) {
      if (!mapRef.current) return;
      mapRef.current.flyTo(
        place.coordinates,
        Math.max(mapRef.current.getZoom(), 14),
        { duration: 0.7 }
      );
    }

    loadBoundary();

    return () => { cancelled = true; };
  }, [selected, mapReady]);

  // ── Zoom out to fit all results when searching ────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    if (!query.trim()) return;

    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current || places.length === 0) return;

      if (places.length === 1) {
        mapRef.current.flyTo(places[0].coordinates, 15, { duration: 0.6 });
        return;
      }

      const bounds = L.latLngBounds(places.map((p) => p.coordinates));
      mapRef.current.flyToBounds(bounds, {
        padding: [60, 60],
        maxZoom: 14,
        duration: 0.6,
      });
    });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, mapReady]);

  return <div ref={containerRef} className={styles.map} />;
}
