import { Button } from '@/ui/button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Ellipse from '../ellipse';
import HeroImage from './heroImage';

const linkedinURL = 'https://www.linkedin.com/in/leon-maxime-noel/';

function CatchLine({ className }: { className: string }) {
  return (
    <div
      className={`p-4 text-center md:px-14 lg:w-[550px] lg:px-0 lg:text-justify xl:w-[600px] 2xl:w-[800px] ${className}`}
    >
      I&apos;m a dedicated software developer who thrives on transforming intricate problems into streamlined solutions.
      With a keen eye for detail and a passion for creativity, I craft clean and efficient code that drives progress.
    </div>
  );
}

export default function Hero() {
  return (
    <section id="about" className="mt-20 2xl:mt-60">
      <div className="min-w-screen flex items-center justify-around p-4 lg:mt-10 lg:justify-start xl:px-14 2xl:mt-20">
        <HeroImage />
        <div className="right-element ml-2">
          <p className="animate-slidein opacity-0 [--slidein-delay:300ms] md:text-xl lg:min-w-max xl:text-3xl">
            Maxime NOEL
          </p>
          <p className="animate-slidein opacity-0 [--slidein-delay:300ms] md:text-xl lg:min-w-max xl:text-3xl">
            Web Developper
          </p>
          <div className="flex animate-slidein flex-wrap items-center opacity-0 [--slidein-delay:500ms]">
            <a href="https://github.com/Leon-azerty" target="_blank">
              <GitHubLogoIcon className="m-2 ml-0 h-6 w-6" />
            </a>
            <a href={linkedinURL} target="_blank">
              <LinkedInLogoIcon className="m-2 ml-0 h-6 w-6" />
            </a>
            <Link href="#contact" className="pl-0">
              mail
            </Link>
            <a href="/MaximeNOEL_eng.pdf" download="MaximeNOEL_eng.pdf" className="ml-2 underline">
              Resume
            </a>
          </div>
          <CatchLine className="hidden animate-slidein opacity-0 [--slidein-delay:700ms] lg:block" />
          <Button variant={'cta'} className="animate-slidein opacity-0 [--slidein-delay:700ms]">
            <Link href="#contact">{"Let's Build Together"}</Link>
          </Button>
        </div>
      </div>
      <CatchLine className="lg:hidden" />
      <div className="relative">
        <Ellipse />
      </div>
    </section>
  );
}
