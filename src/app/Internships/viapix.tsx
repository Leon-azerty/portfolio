import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import pytorchLogo from '@/public/logo_pytorch.png';
import delphiLogo from '@/public/logo_delphi.png';
import Badge from '@/badge';
import viapixLogo from '@/public/logo_viapix.png';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Viapix() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const anim = gsap.fromTo(
        container.current,
        {
          opacity: 0,
          x: +100,
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
    },
    { scope: container }
  );

  return (
    <section className="mt-4 h-full" ref={container}>
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
          <p className="text-2xl ml-2">Viapix</p>
          <a href="https://viapix.fr/en/home/" target="_blank">
            <ExternalLinkIcon className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4 lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
        <Badge alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
      </div>

      <Card className="mt-4 h-full">
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
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                  </a>
                </div>
                <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
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
