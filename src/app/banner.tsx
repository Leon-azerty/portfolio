import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Ellipse from './ellipse';
import Link from 'next/link';

function CatchLine({ className }: { className: string }) {
  // lg:px-12 xl:px-22 2xl:px-40 lg:text-xl
  return (
    <div
      className={`text-center p-4 md:px-14 lg:px-0 lg:w-[550px] lg:text-justify xl:w-[600px] 2xl:w-[800px] ${className}`}
    >
      I&apos;m a dedicated software developer who thrives on transforming intricate problems into streamlined solutions.
      With a keen eye for detail and a passion for creativity, I craft clean and efficient code that drives progress.
      Let&apos;s embark on a journey of innovation and collaborate to build a better, brighter future.
    </div>
  );
}

export default function Banner() {
  return (
    <section id="about" className="2xl:mt-60">
      <div className="min-w-screen p-4 flex justify-around items-center lg:justify-start xl:px-14 lg:mt-10 2xl:mt-20">
        <div className="w-24 h-52 sm:w-32 sm:h-56 md:w-40 md:h-60 xl:w-48 2xl:mr-8 flex items-center">
          <Image
            className="left-element rounded-full"
            src="/M.N.2.png"
            width={100}
            height={100}
            alt="Beautiful picture of myself"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
          />
        </div>
        <div className="right-element ml-2">
          <p className="md:text-xl lg:min-w-max xl:text-3xl">Maxime NOEL</p>
          <p className="md:text-xl lg:min-w-max xl:text-3xl">Web Developper </p>
          <div className="flex items-center flex-wrap">
            <a href="https://github.com/leon3108" target="_blank">
              <GitHubLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <a href="https://www.linkedin.com/in/maxime-noel-lyon/" target="_blank">
              <LinkedInLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <Link href="#contact" className="pl-0">
              mail
            </Link>
            <a href="public/Resume 2024 English.pdf" download="Resume2024.pdf" className="ml-2 underline">
              Resume
            </a>
          </div>
          <CatchLine className="hidden lg:block" />
        </div>
      </div>
      <CatchLine className="lg:hidden" />
      <div className="relative">
        <Ellipse />
      </div>
    </section>
  );
}
