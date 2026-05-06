import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chimei.vercel.app';
const TITLE = '地名 Chimei — Tokyo Place Names';
const DESCRIPTION =
  'An interactive map of Tokyo exploring place names in kanji with English translations and etymological descriptions.';

export const viewport: Viewport = {
  themeColor: '#f2f1ed',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Tokyo', 'Japan', 'place names', 'kanji', 'map', 'etymology',
    '地名', 'chimei', 'Japanese geography', 'Tokyo wards', 'Japanese history',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    siteName: 'Chimei',
    url: SITE_URL,
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Chimei map pin' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/icon.png'],
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Chimei',
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
