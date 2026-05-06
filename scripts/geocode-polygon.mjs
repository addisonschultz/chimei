/**
 * For every place in places.ts, fetches the OSM polygon boundary and uses
 * the bounding-box center as the coordinate. This guarantees the marker dot
 * sits inside the boundary polygon drawn on the map.
 * Falls back to Nominatim lat/lon centroid when no polygon is found.
 */

import { readFileSync, writeFileSync } from 'fs';

const src = readFileSync('data/places.ts', 'utf8');

// Parse all place entries from the TS file
const allBlocks = [];
const blockRe = /\{([^{}]*(?:description:[^{}]*)?[^{}]*)\}/gs;
let m;
while ((m = blockRe.exec(src)) !== null) {
  const block = m[1];
  const idM = block.match(/id:\s*'([^']+)'/);
  const kanjiM = block.match(/kanji:\s*'([^']+)'/);
  const typeM = block.match(/type:\s*'([^']+)'/);
  const wardM = block.match(/ward:\s*'([^']+)'/);
  if (idM && kanjiM && typeM) {
    allBlocks.push({
      id: idM[1],
      kanji: kanjiM[1],
      type: typeM[1],
      ward: wardM ? wardM[1] : null,
    });
  }
}

console.error(`Parsed ${allBlocks.length} places`);

function nominatimQuery(place) {
  if (place.type === 'city') return '東京都';
  if (place.type === 'ward') return `${place.kanji}, 東京都, 日本`;
  return `${place.kanji}, ${place.ward ?? '東京都'}, 東京都, 日本`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function bboxCenter(coords) {
  // coords is a flat or nested array of [lon, lat] pairs (GeoJSON order)
  let minLat = Infinity, maxLat = -Infinity, minLon = Infinity, maxLon = -Infinity;
  function visit(arr) {
    if (typeof arr[0] === 'number') {
      const [lon, lat] = arr;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
    } else {
      arr.forEach(visit);
    }
  }
  visit(coords);
  return [(minLat + maxLat) / 2, (minLon + maxLon) / 2];
}

async function geocode(place) {
  const q = nominatimQuery(place);
  const url =
    `https://nominatim.openstreetmap.org/search` +
    `?q=${encodeURIComponent(q)}&format=geojson&polygon_geojson=1&limit=5&countrycodes=jp`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'chimei-geocode-script/1.0 (addisonschultz0@gmail.com)' },
  });
  const data = await res.json();
  if (!data.features?.length) return null;

  // Prefer a polygon result so the center is guaranteed inside the boundary
  const poly = data.features.find(
    (f) => f.geometry?.type === 'Polygon' || f.geometry?.type === 'MultiPolygon'
  );

  if (poly) {
    // Use bounding box center of the polygon
    return bboxCenter(poly.geometry.coordinates);
  }

  // Fall back to the centroid of the first result
  const first = data.features[0];
  if (first.geometry?.type === 'Point') {
    const [lon, lat] = first.geometry.coordinates;
    return [lat, lon];
  }

  return null;
}

const results = {};
let i = 0;
for (const place of allBlocks) {
  i++;
  process.stderr.write(`[${i}/${allBlocks.length}] ${place.id}...\n`);
  try {
    const coords = await geocode(place);
    if (coords) {
      results[place.id] = [
        Math.round(coords[0] * 1e7) / 1e7,
        Math.round(coords[1] * 1e7) / 1e7,
      ];
      process.stderr.write(`  → [${results[place.id][0]}, ${results[place.id][1]}]\n`);
    } else {
      process.stderr.write(`  → NOT FOUND\n`);
    }
  } catch (e) {
    process.stderr.write(`  → ERROR: ${e.message}\n`);
  }
  await sleep(1100);
}

writeFileSync('scripts/coords-poly.json', JSON.stringify(results, null, 2));
console.error('Saved coords-poly.json');
