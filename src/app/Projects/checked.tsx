'use client';

import Badge from '@/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import checked from '@/public/checked.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import reactLogo from '@/public/logo_react.png';
import supabaseLogo from '@/public/logo_supabase.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import { useGSAP } from '@gsap/react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

function BadgeLine({ className }: { className?: string }) {
  return (
    <div className={`flex overflow-x-auto whitespace-no-wrap mt-4 ${className}`} /* animate-infinite-left-to-right */>
      <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge alt="logo of Nextjs" src={nextjsLogo} text="Nextjs" className="bg-nextjs" />
      <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
      <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
    </div>
  );
}

export default function Checked() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.fromTo(
      container.current,
      {
        opacity: 0,
        x: -100,
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
  });

  return (
    <section className="mt-4 opacity-0" ref={container}>
      <div className="flex items-center lg:hidden">
        <p className="text-2xl">Checked, Todo app</p>
        <a href="https://checkd.online/login" target="_blank">
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </a>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-start">
        <div className="flex justify-center">
          <Image
            alt="screenshot of Checked"
            src={checked}
            width={100}
            height={100}
            className="w-80 sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px]"
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col xl:flex-col-reverse xl:ml-4">
          <BadgeLine />

          <Card className="mt-4 xl:mt-0">
            <CardHeader className="hidden lg:block">
              <CardTitle>Checked, Todo app</CardTitle>
              <CardDescription className="flex justify-between">
                <a href="https://checkd.online/login" target="_blank">
                  Checkd.online
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              As an avid user of apps like Notion and Obsidian, I naturally aspired to create a project inspired by what
              I love.
              <br /> The primary feature includes a robust tagging system, enabling users to create to-dos with tags and
              easily sort tasks based on these tags.
              <br /> Throughout the development process, I immersed myself in learning server components with Next. js.
              <br /> I gained valuable experience in hosting projects using Vercel, including domain name modification.
              <br /> Moreover, I incorporated Supabase and PostgreSQL to efficiently store and manage both the to-dos
              and their associated tags, enhancing the project&apos;s functionality and data management capabilities.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
