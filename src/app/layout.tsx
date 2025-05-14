import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import { MotionProvider } from '@/lib/motion-provider';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Muhammed T - Personal Portfolio',
  description: 'Professional portfolio showcasing skills, projects, and experience',
  keywords: ['portfolio', 'web development', 'software engineer'],
  authors: [{ name: 'Muhammed t' }],
  openGraph: {
    title: 'Muhammed T - Personal Portfolio',
    description: 'Professional portfolio showcasing skills, projects, and experience',
    images: [{ url: '/images/profile.jpg' }]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <MotionProvider>
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}