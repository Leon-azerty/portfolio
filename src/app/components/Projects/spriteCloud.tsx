'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import { cn } from '@/lib/utils';
import nextjsLogo from '@/public/logo_nextjs.png';
import reactLogo from '@/public/logo_react.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import typescriptLogo from '@/public/logo_typescript.png';
import neon from '@/public/neon.svg';
import prismaLogo from '@/public/prisma.png';
import SpriteCloudImage from '@/public/spritecloud.png';
import stripeLogo from '@/public/stripe.png';
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
    <div className={cn('whitespace-no-wrap mt-4 flex overflow-x-auto', className)} /* animate-infinite-left-to-right */>
      <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge alt="logo of Nextjs" src={nextjsLogo} text="Nextjs" className="bg-nextjs" />
      <Badge alt="logo of Neon" src={neon} text="Neon" className="bg-neon" />
      <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
      <Badge alt="logo of Typescript" src={typescriptLogo} text="Typescript" className="bg-typescript" />
      <Badge alt="logo of Stripe" src={stripeLogo} text="Stripe" className="bg-stripe" />
      <Badge alt="logo of Prisma" src={prismaLogo} text="Prisma" className="bg-prisma" />
    </div>
  );
}

export default function SpriteCloud() {
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
        <p className="text-2xl">SpriteCloud, Make spritesheet</p>
        <a href="https://checkd.online/login" target="_blank">
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-start">
        <div className="flex justify-center xl:min-w-3/12">
          <Image
            alt="screenshot of SpriteCloud"
            src={SpriteCloudImage}
            width={100}
            height={100}
            className="w-80 rounded-2xl sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px]"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col xl:ml-4 xl:max-w-7/12 xl:flex-col-reverse">
          <BadgeLine />

          <Card className="mt-4 xl:mt-0">
            <CardHeader className="hidden lg:block">
              <CardTitle>SpriteCloud, Make Spritesheet</CardTitle>
              <CardDescription className="flex justify-between">
                <a href="https://sprite-cloud.vercel.app/" target="_blank">
                  SpriteCloud
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-pretty">
              I created my first SaaS product, called SpriteCloud, while trying to create my own spritesheets for a game
              jam.
              <br />
              After encountering numerous challenges with existing software solutions, I developed my own
              <br />
              browser-based tool for creating spritesheets. Starting with a proof of concept, I progressed to an MVP,
              <br />
              and finally launched Version 1 in January 2025, incorporating initial user feedback. This project marked
              <br />
              my first implementation of Stripe for payment processing.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
