'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import epitech from '@/public/epitech.webp';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function Epitech() {
  const container = useRef<HTMLElement>(null);
  const isClient = useIsClient();

  let offset = 100;
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
      onLeave: () => anim.pause(0),
      onLeaveBack: () => anim.pause(0),
    });
  }, [isClient]);

  return (
    <section className="h-full" ref={container}>
      <div className="flex items-center lg:hidden">
        <Image
          src={epitech}
          alt="Epitech's Logo"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <p className="ml-2 text-2xl">Epitech</p>
      </div>

      <Card className="h-full">
        <CardHeader className="hidden lg:block">
          <CardTitle className="flex items-center">
            <div className="flex">
              <Image
                src={epitech}
                alt="Epitech's Logo"
                style={{
                  width: '90px',
                  height: 'auto',
                }}
              />
              <div className="ml-2">
                <CardTitle className="hidden: lg:block">Epitech</CardTitle>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          During my fifth year, I worked part-time at Epitech as an Educational Supervisor from September 2024 to March
          2025. Throughout this experience, I developed my soft skills, learned to resolve interpersonal conflicts with
          students, found solutions to help teams complete their projects, and provided technical assistance with their
          code. I also participated in project evaluations, pedagogical follow-ups, and guided students through their
          technological choices and architectural decisions.
        </CardContent>
      </Card>
    </section>
  );
}
