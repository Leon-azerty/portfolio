import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import reactLogo from '@/public/logo_react.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import Badge from '@/badge';
import gnLogo from '@/public/photo_gn.png';

export default function GnConsulting() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
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

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        <Badge href="" alt="logo of React" src={reactLogo} text="React" className="bg-react" />
        <Badge href="" alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
      </div>

      <Card className="mt-4">
        <CardContent>
          I joined GN consulting during a part-time where I could learn the basics of front-end web development with aim
          to create a portfolio. I could also work on two different web-app with performances issues.
        </CardContent>
      </Card>
    </section>
  );
}
