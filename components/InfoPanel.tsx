'use client';

import { useEffect } from 'react';
import { Place } from '@/types';
import styles from './InfoPanel.module.css';

const TYPE_LABELS: Record<string, string> = {
  city: '都 City',
  ward: '区 Ward',
  neighborhood: '町 Neighborhood',
  town: '町 Town',
};

const TYPE_COLORS: Record<string, string> = {
  city: 'city',
  ward: 'ward',
  neighborhood: 'neighborhood',
  town: 'town',
};

interface Props {
  place: Place | null;
  onClose: () => void;
}

export default function InfoPanel({ place, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className={`${styles.panel} ${place ? styles.open : ''}`} role="dialog" aria-modal="true">
      {place && (
        <>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            ✕
          </button>

          <div className={styles.top}>
            <div className={styles.kanjiBlock}>
              <h1 className={styles.kanji}>{place.kanji}</h1>
              <p className={styles.romaji}>{place.romaji}</p>
            </div>
            <span className={`${styles.badge} ${styles[TYPE_COLORS[place.type]]}`}>
              {TYPE_LABELS[place.type]}
            </span>
          </div>

          <div className={styles.english}>
            <span className={styles.englishLabel}>English</span>
            <span className={styles.englishValue}>{place.english}</span>
          </div>

          {place.ward && (
            <div className={styles.wardRow}>
              <span className={styles.wardLabel}>Ward</span>
              <span className={styles.wardValue}>{place.ward}</span>
            </div>
          )}

          <div className={styles.divider} />

          <div className={styles.descriptionBlock}>
            <h2 className={styles.descriptionHeading}>Etymology</h2>
            <p className={styles.description}>{place.description}</p>
          </div>

          <div className={styles.coordinates}>
            {place.coordinates[0].toFixed(4)}°N, {place.coordinates[1].toFixed(4)}°E
          </div>
        </>
      )}
    </div>
  );
}
