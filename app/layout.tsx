import './globals.css';

import type { Metadata } from 'next';

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#05060C"/><path fill="#EAF2FF" d="M22 30a10 10 0 0 1 20 0v4h2a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V42a4 4 0 0 1 4-4h2v-4zm6 0v4h8v-4a4 4 0 1 0-8 0zm4 11a4 4 0 0 0-2 7.464V53a2 2 0 1 0 4 0v-4.536A4 4 0 0 0 32 41z"/></svg>`;
const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: faviconUrl,
      type: 'image/svg+xml',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
