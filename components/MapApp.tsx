'use client';

import { useState, useMemo } from 'react';
import places from '@/data/places';
import { Place } from '@/types';
import MapView from './MapView';
import InfoPanel from './InfoPanel';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import AboutModal from './AboutModal';
import styles from './MapApp.module.css';

export type FilterType = 'all' | 'city' | 'ward' | 'neighborhood';

export default function MapApp() {
  const [selected, setSelected] = useState<Place | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [query, setQuery] = useState('');
  const [aboutOpen, setAboutOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return places.filter((p) => {
      if (filter !== 'all' && p.type !== filter) return false;
      if (!q) return true;
      return (
        p.kanji.includes(query) ||
        p.romaji.toLowerCase().includes(q) ||
        p.english.toLowerCase().includes(q) ||
        (p.description ?? '').toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoKanji}>地名</span>
            <span className={styles.logoRomaji}>Chimei</span>
          </div>
          <p className={styles.subtitle}>Tokyo Place Names</p>
          <button
            className={styles.infoBtn}
            onClick={() => setAboutOpen(true)}
            aria-label="About"
          >
            <InfoIcon />
          </button>
        </header>
        <SearchBar value={query} onChange={setQuery} />
        <FilterButtons
          active={filter}
          onChange={(f) => { setFilter(f); setSelected(null); }}
        />
        <div className={styles.count}>
          {filtered.length} place{filtered.length !== 1 ? 's' : ''}
        </div>
      </div>

      <MapView
        places={filtered}
        selected={selected}
        onSelect={setSelected}
        query={query}
      />

      <InfoPanel place={selected} onClose={() => setSelected(null)} />
      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </div>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}
