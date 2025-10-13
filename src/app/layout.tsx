import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import PageLayout from '@/components/layout/PageLayout';
import ClientScrollProvider from '@/components/providers/ClientScrollProvider';
import LoadingProvider from '@/components/providers/LoadingProvider';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '700'],
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Petr Bílek • Frontend Developer',
  description:
    'Frontend developer focused on building responsive, accessible, and visually clean web interfaces with React and modern web technologies.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <LoadingProvider>
          <ClientScrollProvider>
            <PageLayout>{children}</PageLayout>
          </ClientScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
