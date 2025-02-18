import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nguyễn Công Minh - Full-Stack Developer',
  description: 'Portfolio website of Nguyễn Công Minh, a passionate Full-Stack Developer specializing in modern web and mobile technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
