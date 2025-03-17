'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useRef } from 'react';

export default function SeeMoreBtn({ start = '50%' }: { start?: string }) {
  const container = useRef<HTMLAnchorElement>(null);
  const isClient = useIsClient();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.fromTo(
      container.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        paused: true,
      }
    );

    ScrollTrigger.create({
      trigger: container.current,
      start: `center ${start}`,
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
    <Link href="/projects" className="hover:underline" ref={container}>
      see more
    </Link>
  );
}
