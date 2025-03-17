import { SideBarProvider } from '@/common/sidebar-provider';
import { ThemeProvider } from '@/common/theme-provider';
import { Toaster } from '@/ui/sonner';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModeToggle } from './components/ModeToggle';
import SideBar from './components/sideBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maxime NOËL',
  description:
    "Full-stack web developer specializing in React, Next.js, Tailwind CSS, Typescript, Supabase, and PostgreSQL. Explore my work for seamless integration of these tools in dynamic, responsive web apps. Passionate about exceeding user expectations, I focus on robust front-end experiences with React and Next.js, sleek designs with Tailwind CSS, and code quality with Typescript. Backend solutions leverage Supabase and PostgreSQL for efficiency and security. Contact me for collaboration or to discuss your next project. Let's build something extraordinary in web development!",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SideBarProvider>
            <div className="relative">
              {children}
              <SideBar />
            </div>
            <div className="fixed right-0 bottom-0 p-4">
              <ModeToggle />
            </div>
            <Analytics />
          </SideBarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
