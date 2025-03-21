'use client';

import { Button } from '@/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useContext } from 'react';
import { SidebarContext } from '../common/sidebar-provider';

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
    <div className="bg-background fixed top-0 left-0 z-50 h-full w-52 border-r-2 p-4 pt-6 shadow-2xl">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-lg">Maxime NOËL</p>
          <p className="text-gray-500 italic">Web Developper</p>
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
