'use client';

import { Button } from '@/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed start-0 top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Maxime NOEL</span>
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          <Button
            variant={'cta'}
            className="rounded-lg px-4 py-2 text-center text-sm font-medium  focus:outline-none focus:ring-4 "
          >
            Contact me
          </Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium rtl:space-x-reverse  md:mt-0 md:flex-row md:space-x-8 md:border-0 ">
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
                aria-current="page"
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
                aria-current="page"
                href="#internships"
              >
                Internships
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
                aria-current="page"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
                aria-current="page"
                href="#experiences"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
                aria-current="page"
                href="#stack"
              >
                Stack
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:text-yellow hover:underline md:bg-transparent md:p-0 "
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
