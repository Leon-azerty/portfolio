'use client';

import { SidebarContext } from '@/contexts/sideBarContext';
import { Button } from '@/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useContext } from 'react';

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
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-52 border-r-2 border-gray-300 bg-white p-4 pt-6 shadow-2xl dark:bg-[#121212]">
      <div className="mb-10 flex items-center justify-between">
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
            key={element.text}
            href={element.href}
            onClick={() => {
              setIsOpen(false);
            }}
            className="mt-2 max-w-min hover:underline"
          >
            {element.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
