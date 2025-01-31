'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import flutterLogo from '@/public/logo_flutter.png';
import piwioLogo from '@/public/logo_piwio.png';
import supabaseLogo from '@/public/logo_supabase.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useGSAP } from '@gsap/react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Badge from '../badge';

export default function Piwio() {
  const container = useRef<HTMLElement>(null);
  const isClient = useIsClient();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let offset = -100;
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
      start: 'center bottom',
      end: 'top top',
      onEnter: () => anim.play(),
      onEnterBack: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: 'center bottom',
      end: 'bottom top',
      onLeave: () => anim.pause(0),
      onLeaveBack: () => anim.pause(0),
    });
  }, [isClient]);

  return (
    <section className="h-full" ref={container}>
      <div className="flex items-center lg:hidden">
        <Image
          src={piwioLogo}
          alt="logo of Piwio"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <div className="flex items-center">
          <p className="ml-2 text-2xl">Piwio</p>
          <a href="https://www.piwio.fr/" target="_blank">
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="whitespace-no-wrap flex overflow-x-auto lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of Flutter" src={flutterLogo} text="Flutter" className="bg-flutter" />
        <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
      </div>

      <Card className=" h-full">
        <CardHeader className="hidden lg:block">
          <CardTitle className="flex items-center">
            <div className="flex">
              <Image
                src={piwioLogo}
                alt="logo of Piwio"
                style={{
                  width: '90px',
                  height: 'auto',
                }}
              />
              <div className="ml-2">
                <div className="flex items-center">
                  <CardTitle className="hidden: lg:block">Piwio</CardTitle>
                  <a href="https://www.piwio.fr/" target="_blank">
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="whitespace-no-wrap flex overflow-x-auto" /* animate-infinite-left-to-right*/>
                  <Badge alt="logo of Flutter" src={flutterLogo} text="Flutter" className="bg-flutter" />
                  <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          As a Flutter developer at Piwio, I initially explored React, unsure if it was my preferred technology. During
          my time there, I created software for various devices, including Windows and Android. I delved into parallel
          computing in Flutter, utilized DLLs for IoT data synchronization, and discovered Supabase for efficient
          embedded system data storage. This experience not only enhanced my technical proficiency but also broadened my
          perspective on cutting-edge technologies in software development.
        </CardContent>
      </Card>
    </section>
  );
}
