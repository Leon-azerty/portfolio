'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import flagGermany from '@/public/flag_germany.png';
import { Card, CardContent, CardTitle } from '@/ui/card';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function Berlin() {
  const container = useRef<HTMLElement>(null);
  const isClient = useIsClient();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let offset = 100;
    if (isClient && window.innerWidth < 1024) {
      offset = 0;
    }

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
    <section className="mt-4" ref={container}>
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <Image src={flagGermany} width="30" alt="German's flag" />
          <p className="ml-2">8 months in Berlin</p>
        </CardTitle>
        <CardContent className="p-0 pt-4 lg:h-24">
          During my second year in Epitech I had the oppurtinity to study in Berlin
        </CardContent>
      </Card>
    </section>
  );
}
