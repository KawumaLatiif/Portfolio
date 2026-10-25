import type { Metadata } from 'next';

import './globals.css';
import MotionProvider from '@/components/Layout/MotionProvider';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';



export const metadata: Metadata = {
  title: 'Kawuma Latiif | Electronics & Computer Engineer',
  description: 'Software development, network engineering, data analysis and GIS. Explore Kawuma Latiif’s projects, experience and education.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <MotionProvider><Navbar />
        <main id="main-content">{children}</main>
        <Footer /></MotionProvider>
      </body>
    </html>
  );
}