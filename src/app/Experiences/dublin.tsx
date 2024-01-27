import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Dublin() {
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
      onLeave: () => anim.pause(0),
      onLeaveBack: () => anim.pause(0),
    });
  });

  return (
    <section className="mt-4" ref={container}>
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <Image
            src="/flag_ireland.png"
            width="30"
            height="30"
            alt="Ireland's flag"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <p className="ml-2">Currently in Dublin</p>
        </CardTitle>
        <CardContent className="p-0 pt-4 lg:h-24">
          Currently in my fourth year in Epitech, I study at the Technological University of Dublin in program “Data
          analysis”
        </CardContent>
      </Card>
    </section>
  );
}
