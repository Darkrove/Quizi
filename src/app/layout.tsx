import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Business Verification App',
  description: 'Verify business information and earn points',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-animated bg-zinc-200`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}