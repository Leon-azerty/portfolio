import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export default function GnConsulting() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <Image src="/photo_gn.png" alt="logo of Viapix" width={90} height={60} />
        <p className="text-2xl ml-2">GN consulting</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        {/* Badge react */}
        <Link href="" className={badgeVariants({ variant: 'react' })}>
          <Image src="/logo_react.png" width={20} height={20} alt="logo of React" />
          <p className="text-lg ml-2">React</p>
        </Link>

        {/* Badge tailwind */}
        <Link href="" className={badgeVariants({ variant: 'tailwind' })}>
          <Image src="/logo_tailwind.png" width={20} height={20} alt="logo of Tailwind" />
          <p className="text-lg ml-2">Tailwind</p>
        </Link>
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
