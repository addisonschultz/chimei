'use client';

import { FilterType } from './MapApp';
import styles from './FilterButtons.module.css';

const OPTIONS: { value: FilterType; label: string; kanji: string }[] = [
  { value: 'all',          label: 'All',           kanji: '全' },
  { value: 'city',         label: 'City',          kanji: '都' },
  { value: 'ward',         label: 'Wards',         kanji: '区' },
  { value: 'neighborhood', label: 'Neighborhoods', kanji: '町' },
];

const LEGEND = [
  { color: '#0f172a', label: 'City' },
  { color: '#1d4ed8', label: 'Ward' },
  { color: '#b91c1c', label: 'Neighborhood' },
];

interface Props {
  active: FilterType;
  onChange: (f: FilterType) => void;
}

export default function FilterButtons({ active, onChange }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.buttons}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.btn} ${active === opt.value ? styles.active : ''} ${styles[opt.value]}`}
            onClick={() => onChange(opt.value)}
          >
            <span className={styles.kanji}>{opt.kanji}</span>
            <span className={styles.label}>{opt.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.legend}>
        {LEGEND.map((l) => (
          <span key={l.label} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: l.color }} />
            <span className={styles.legendText}>{l.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
