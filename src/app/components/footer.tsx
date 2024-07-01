import Link from 'next/link';

export default function Footer() {
  return (
    <section className="my-10">
      <div className="flex justify-center">
        <div className="border-divider w-[80%] border-t">&nbsp;</div>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#internships">Internships</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <p className="pt-3 text-center text-zinc-300">
        Made By Me with NextJs and Tailwind
        <br />
        See the repository on{' '}
        <a className="underline" href="https://github.com/Leon-azerty/portfolio" target="_blank">
          Github
        </a>
        <br />
        License MIT
        <br />
      </p>
    </section>
  );
}
