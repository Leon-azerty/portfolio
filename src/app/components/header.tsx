'use client';

import { Button } from '@/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from '../common/sidebar-provider';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  let { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <header className="min-w-screen flex items-center justify-between pt-4 lg:hidden">
        <Button
          variant="outline"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </header>
      <header className="hidden items-center justify-end space-x-4 border-b-2 border-gray-400 p-4 lg:flex">
        <Link className="hover:underline" href="#about">
          About
        </Link>
        <Link className="hover:underline" href="#internships">
          Internships
        </Link>
        <Link className="hover:underline" href="#projects">
          Projects
        </Link>
        <Link className="hover:underline" href="#experiences">
          Experiences
        </Link>
        <Link className="hover:underline" href="#stack">
          Stack
        </Link>
        <Link className="hover:underline" href="#contact">
          Contact
        </Link>
        <ModeToggle />
      </header>
    </div>
  );
}
