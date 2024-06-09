import { SideBarProvider } from '@/app/common/sidebar-provider';
import { ThemeProvider } from '@/app/common/theme-provider';
import { Toaster } from '@/ui/sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SideBarProvider>{children}</SideBarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
