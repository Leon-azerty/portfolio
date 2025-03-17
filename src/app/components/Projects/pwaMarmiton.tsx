'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import nextjsLogo from '@/public/logo_nextjs.png';
import reactLogo from '@/public/logo_react.png';
import supabase from '@/public/logo_supabase.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import typescriptLogo from '@/public/logo_typescript.png';
import SpriteCloudImage from '@/public/spritecloud.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { useGSAP } from '@gsap/react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Badge from '../badge';

function BadgeLine({ className }: { className?: string }) {
  return (
    <div className={`whitespace-no-wrap mt-4 flex overflow-x-auto ${className}`} /* animate-infinite-left-to-right */>
      <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge alt="logo of Nextjs" src={nextjsLogo} text="Nextjs" className="bg-nextjs" />
      <Badge alt="logo of Supabase" src={supabase} text="Supabase" className="bg-supabase" />
      <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
      <Badge alt="logo of Typescript" src={typescriptLogo} text="Typescript" className="bg-typescript" />
    </div>
  );
}

export default function PwaMarmiton() {
  const container = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();

  let offset = -100;
  if (isClient && window.innerWidth < 1024) {
    offset = 0;
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.fromTo(
      container.current,
      {
        opacity: 0,
        x: offset,
      },
      {
        opacity: 1,
        x: 0,
        paused: true,
      }
    );

    ScrollTrigger.create({
      trigger: container.current,
      start: 'center 90%',
      onEnter: () => anim.play(),
      onEnterBack: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top bottom',
      onLeaveBack: () => anim.pause(0),
      onLeave: () => anim.pause(0),
    });
  }, [isClient]);

  return (
    <section className="mt-4 opacity-0" ref={container}>
      <div className="flex items-center lg:hidden">
        <p className="text-2xl">PWA - Marmiton</p>
        <a href="https://pwa-marmiton.vercel.app/" target="_blank">
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-start">
        <div className="flex justify-center">
          <Image
            alt="screenshot of PWA - Marmiton"
            src={SpriteCloudImage}
            width={100}
            height={100}
            className="w-80 rounded-2xl sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px]"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col xl:ml-4 xl:flex-col-reverse">
          <BadgeLine />

          <Card className="mt-4 xl:mt-0">
            <CardHeader className="hidden lg:block">
              <CardTitle>PWA - Marmiton</CardTitle>
              <CardDescription className="flex justify-between">
                <a href="https://pwa-marmiton.vercel.app/" target="_blank">
                  PWA - Marmiton
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-pretty">
              I created my first SaaS product, called SpriteCloud, while trying to create my own spritesheets for a game
              <br />
              jam. After encountering numerous challenges with existing software solutions, I developed my own
              <br />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
