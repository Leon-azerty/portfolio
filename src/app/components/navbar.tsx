'use client';

import { Button } from '@/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from '../common/sidebar-provider';

export default function Navbar() {
  let { setIsOpen } = useContext(SidebarContext);
  return (
    <nav className="bg-background fixed start-0 top-0 z-50 w-full border-b">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Maxime NOEL</span>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Button
            variant={'cta'}
            className="rounded-lg px-4 py-2 text-center text-sm font-medium focus:ring-4 focus:outline-hidden"
          >
            Contact me
          </Button>
          <Menu
            onClick={() => {
              console.log('ici');
              setIsOpen((prev) => !prev);
            }}
            className="hover:bg-muted inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:ring-2 focus:outline-hidden md:hidden"
          />
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#internships"
              >
                Internships
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#experiences"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#stack"
              >
                Stack
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow block rounded px-3 py-2 hover:underline md:bg-transparent md:p-0"
                aria-current="page"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
