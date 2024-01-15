import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import SideBarButton from './sideBarButton';

export default function Header() {
  return (
    <div>
      <header className="min-w-screen pt-4 flex justify-between items-center lg:hidden">
        <SideBarButton />
        <ModeToggle />
      </header>
      <header className="hidden lg:flex justify-end items-center space-x-4 border-b-2 border-gray-400 p-4">
        <Link className="hover:underline" href="#about">
          About
        </Link>
        <Link className="hover:underline" href="#projects">
          Projects
        </Link>
        <Link className="hover:underline" href="#internships">
          Internships
        </Link>
        <Link className="hover:underline" href="#experiences">
          Experiences
        </Link>
        <Link className="hover:underline" href="#contact">
          Contact
        </Link>
        <ModeToggle />
      </header>
    </div>
  );
}
