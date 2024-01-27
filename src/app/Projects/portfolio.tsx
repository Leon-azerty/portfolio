import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import reactLogo from '@/public/logo_react.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import typescriptLogo from '@/public/logo_typescript.png';
import illustration from '@/public/portfolio_illustration.png';
import Badge from '@/badge';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function BadgeLine() {
  return (
    <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
      <Badge alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge alt="logo of NextJS" src={nextjsLogo} text="NextJs" className="bg-nextjs" />
      <Badge alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
      <Badge alt="logo of Typescript" src={typescriptLogo} text="Typescript" className="bg-typescript" />
    </div>
  );
}

export default function Portfolio() {
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
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'center 90%',
        onEnterBack: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top bottom',
        onLeaveBack: () => anim.pause(0),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top bottom',
        onLeave: () => anim.pause(0),
      });
    },
    { scope: container }
  );

  return (
    <section className="mt-4" ref={container}>
      <div className="flex items-center lg:hidden">
        <p className="text-2xl">Portfolio</p>
      </div>

      <div className="xl:flex">
        <div className="flex flex-col xl:flex-col-reverse">
          <BadgeLine />

          <Card className="mt-4">
            <CardHeader className="hidden xl:block">
              <CardTitle>Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              The application you are currently viewing distinguishes itself from a typical portfolio as it is nearly
              100% static and doesn't necessitate a backend or a database.
              <br />
              In crafting this project, I opted for Next. js, tailwind, and Typescript to ensure a seamless and
              efficient development process.
              <br /> Additionally, I incorporated GSAP for dynamic animations, enhancing the overall user experience
              with visually appealing and interactive elements.
              <br />
            </CardContent>
          </Card>
        </div>

        <Image
          alt="Illustration"
          src={illustration}
          className="hidden xl:flex 2xl:ml-16"
          sizes="100vw"
          style={{
            maxWidth: 'min-content',
            width: '400px ',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
}
