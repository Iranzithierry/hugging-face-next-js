import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export const metadata = {
  title: 'HuggingFace AI 🤗',
  description: 'Developed by Iranzi Dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <main className='relative z-10 w-full overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  );
}
