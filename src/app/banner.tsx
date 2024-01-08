import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Ellipse from './ellipse';

export default function Banner() {
  return (
    <section id="about">
      <div className="min-w-screen p-4 flex justify-around items-center ">
        <Image
          className="left-element rounded-full"
          src="/M.N.2.png"
          width={100}
          height={210}
          alt="Beautiful picture of myself"
        />
        <div className="right-element">
          <h1>Maxime NOEL</h1>
          <h2>Web Developper </h2>
          <div className="flex items-center">
            <GitHubLogoIcon className="h-4 w-4 mr-2" />
            <LinkedInLogoIcon className="h-4 w-4 m-2" />
            <Button variant="link">mon adresse mail</Button>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
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
