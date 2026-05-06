'use client';

import { useEffect } from 'react';
import styles from './AboutModal.module.css';

interface Props {
  onClose: () => void;
}

export default function AboutModal({ onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="About Chimei">
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.logoRow}>
          <span className={styles.kanji}>地名</span>
          <span className={styles.romaji}>Chimei</span>
        </div>

        <p className={styles.description}>
          An interactive map of Tokyo's place names — exploring the kanji, meaning, and etymology
          behind neighbourhoods, wards, and the city itself.
        </p>

        <div className={styles.divider} />

        <div className={styles.madeBy}>
          <span className={styles.label}>Made by</span>
          <div className={styles.links}>
            <a
              href="https://x.com/addisonschultz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <XIcon />
              @addisonschultz
            </a>
            <a
              href="https://github.com/addisonschultz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <GitHubIcon />
              addisonschultz
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <a
          href="https://www.brillapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brill}
        >
          <div className={styles.brillText}>
            <span className={styles.brillTitle}>Learning a language?</span>
            <span className={styles.brillSub}>Download Brill — my free iOS app to help you learn new words fast.</span>
          </div>
          <span className={styles.brillArrow}>→</span>
        </a>
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
