'use client';

import { useContext } from 'react';
import { SidebarContext } from './contexts/sideBarContext';
import { Button } from '@/components/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

function SideBarElement({ href, text }: { href: string; text: string }) {
  let { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <Link
      href={href}
      onClick={() => {
        setIsOpen(false);
      }}
      className="max-w-min mt-2 hover:underline"
    >
      {text}
    </Link>
  );
}

export default function SideBar() {
  let { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="fixed top-0 left-0 w-52 h-full shadow-2xl bg-white dark:bg-[#121212] border-r-2 border-gray-300 p-4 pt-6 z-50">
      <div className="flex items-center justify-between mb-10">
        <p className="text-lg">Maxime NOËL</p>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Cross1Icon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col">
        <SideBarElement href="#about" text="About" />
        <SideBarElement href="#projects" text="Projects" />
        <SideBarElement href="#internships" text="Internships" />
        <SideBarElement href="#experiences" text="Experiences" />
        <SideBarElement href="#contact" text="Contact" />
      </div>
    </div>
  );
}
