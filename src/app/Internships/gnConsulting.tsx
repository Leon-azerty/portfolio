'use client';

import Badge from '@/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import reactLogo from '@/public/logo_react.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import gnLogo from '@/public/photo_gn.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function GnConsulting() {
  const container = useRef<HTMLElement>(null);

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
    <section className="mt-4 h-full" ref={container}>
      <div className="flex items-center lg:hidden">
        <Image
          src={gnLogo}
          alt="logo of Viapix"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <p className="text-2xl ml-2">GN consulting</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4 lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
        <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
      </div>

      <Card className="mt-4 h-full">
        <CardHeader className="hidden lg:block">
          <CardTitle className="flex items-center">
            <div className="flex">
              <Image
                src={gnLogo}
                alt="Photo of GN"
                style={{
                  width: '90px',
                  height: 'auto',
                }}
              />
              <div className="ml-2">
                <CardTitle className="hidden: lg:block">GN Consulting</CardTitle>
                <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
                  <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
                  <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          During a part-time role at GN Consulting, I immersed myself in the basics of front-end web development with
          the aim of building a comprehensive portfolio. In the process, I had the opportunity to address performance
          issues in two diverse web applications. Moreover, I expanded my skill set by exploring Node.js and Vercel,
          gaining insights into efficient project deployment practices.
        </CardContent>
      </Card>
    </section>
  );
}
