import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '地名 Chimei — Tokyo Place Names',
  description:
    'An interactive map of Tokyo exploring place names in kanji with English translations and etymological descriptions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
