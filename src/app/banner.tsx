import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Ellipse from './ellipse';

export default function Banner() {
  return (
    <section id="about">
      <div className="min-w-screen p-4 flex justify-around lg:justify-start items-center xl:my-4 xl:px-14">
        <div className="w-24 h-52 sm:w-32 sm:h-56 md:w-40 md:h-60 xl:w-48 flex items-center">
          <Image
            className="left-element rounded-full"
            src="/M.N.2.png"
            width={100}
            height={100}
            layout="responsive"
            alt="Beautiful picture of myself"
          />
        </div>
        <div className="right-element ml-2">
          <p className="md:text-xl xl:text-3xl">Maxime NOEL</p>
          <p className="md:text-xl xl:text-3xl">Web Developper </p>
          <div className="flex items-center flex-wrap">
            <a href="https://github.com/leon3108" target="_blank">
              <GitHubLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <a href="https://www.linkedin.com/in/maxime-noel-lyon/" target="_blank">
              <LinkedInLogoIcon className="h-6 w-6 m-2 ml-0" />
            </a>
            <p className="pl-0">maxime.noel@epitech.eu</p>
          </div>
        </div>
      </div>
      <div className="text-center p-4 md:px-14 lg:px-12 xl:px-22 2xl:px-40 lg:text-xl">
        I'm a dedicated software developer who thrives on transforming intricate problems into streamlined solutions.
        With a keen eye for detail and a passion for creativity, I craft clean and efficient code that drives progress.
        Let's embark on a journey of innovation and collaborate to build a better, brighter future.
      </div>
      <div className="relative">
        <Ellipse />
      </div>
    </section>
  );
}
