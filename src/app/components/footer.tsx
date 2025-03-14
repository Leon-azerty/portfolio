import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg ">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Maxime NOEL</span>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link href="#about" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="me-4 hover:underline md:me-6">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#internships" className="me-4 hover:underline md:me-6">
                Internships
              </Link>
            </li>
            <li>
              <Link href="#experiences" className="me-4 hover:underline md:me-6">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="#contact" className="me-4 hover:underline md:me-6">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Made By Me with NextJs and Tailwind. See the repository on{' '}
          <a className="underline" href="https://github.com/Leon-azerty/portfolio" target="_blank">
            Github
          </a>
        </span>
      </div>
    </footer>
  );
}
