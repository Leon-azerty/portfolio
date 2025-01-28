'use client';

import useIsClient from '@/app/common/hooks/useIsClient';
import delphiLogo from '@/public/logo_delphi.png';
import pytorchLogo from '@/public/logo_pytorch.png';
import viapixLogo from '@/public/logo_viapix.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { useGSAP } from '@gsap/react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Badge from '../badge';

export default function Viapix() {
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
          src={viapixLogo}
          alt="logo of Viapix"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <div className="flex items-center">
          <p className="ml-2 text-2xl">Viapix</p>
          <a href="https://viapix.fr/en/home/" target="_blank">
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="whitespace-no-wrap flex overflow-x-auto lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
        <Badge alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
      </div>

      <Card className=" h-full">
        <CardHeader className="hidden lg:block">
          <CardTitle className="flex items-center">
            <div className="flex">
              <Image
                src={viapixLogo}
                alt="logo of Viapix"
                style={{
                  width: '90px',
                  height: 'auto',
                }}
              />
              <div className="ml-2">
                <div className="flex items-center">
                  <CardTitle className="hidden: lg:block">Viapix</CardTitle>
                  <a href="https://viapix.fr/en/home/" target="_blank">
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="whitespace-no-wrap flex overflow-x-auto" /* animate-infinite-left-to-right */>
                  <Badge alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
                  <Badge alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          During my second year at Epitech, I joined Viapix as a data scientist. I successfully trained a Deep Learning
          model using PyTorch to identify roads in images, incorporating image labeling for training purposes. The
          nature of semantic segmentation made the training process time-intensive. Concurrently, I developed a map
          reminiscent of Google Maps using OpenStreetMap tiles. This map played a crucial role in precisely displaying
          roads, leveraging the capabilities of the trained Deep Learning model.
        </CardContent>
      </Card>
    </section>
  );
}
