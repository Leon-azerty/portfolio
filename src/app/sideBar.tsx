'use client';

import { Button } from '@/components/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from './contexts/sideBarContext';

const ElementList = [
  { href: '#about', text: 'About' },
  { href: '#internships', text: 'Internships' },
  { href: '#projects', text: 'Projects' },
  { href: '#experiences', text: 'Experiences' },
  { href: '#stack', text: 'Stack' },
  { href: '#contact', text: 'Contact' },
];

export default function SideBar() {
  let { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="fixed top-0 left-0 w-52 h-full shadow-2xl bg-white dark:bg-[#121212] border-r-2 border-gray-300 p-4 pt-6 z-50">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-lg">Maxime NOËL</p>
          <p className="italic text-gray-500">Web Developper</p>
        </div>
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
        {ElementList.map((element) => (
          <Link
            href={element.href}
            onClick={() => {
              setIsOpen(false);
            }}
            className="max-w-min mt-2 hover:underline"
          >
            {element.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
