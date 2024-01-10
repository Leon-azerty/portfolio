import Link from 'next/link';

export default function Footer() {
  return (
    <section className="my-10">
      <div className="flex justify-center">
        <div className="border-[#A4A4A4] border-t w-[80%]">&nbsp;</div>
      </div>
      <div className="flex justify-around flex-wrap">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#internships">Internships</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <p className="text-center text-[#B4B4B4] pt-3">
        Made By Me with NextJs and Tailwind
        <br />
        See the repository on{' '}
        <a className="underline" href="https://github.com/leon3108/portfolio" target="_blank">
          Github
        </a>
        <br />
        License MIT
        <br />
      </p>
    </section>
  );
}
