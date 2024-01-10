import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export default function Portfolio() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <p className="text-2xl">Portfolio</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        {/* Badge React */}
        <Link href="" className={badgeVariants({ variant: 'react' })}>
          <Image
            src="/logo_react.png"
            width={20}
            height={20}
            alt="logo of React"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className="text-lg ml-2">React</p>
        </Link>

        {/* Badge Nextjs */}
        <Link href="" className={badgeVariants({ variant: 'nextjs' })}>
          <Image
            src="/logo_nextjs.png"
            width={20}
            height={20}
            alt="logo of NextJS"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className="text-lg ml-2">NextJS</p>
        </Link>

        {/* Badge Tailwind */}
        <Link href="" className={badgeVariants({ variant: 'tailwind' })}>
          <Image
            src="/logo_tailwind.png"
            width={20}
            height={20}
            alt="logo of Tailwind"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className="text-lg ml-2">Tailwind</p>
        </Link>

        {/* Badge Typescript */}
        <Link href="" className={badgeVariants({ variant: 'typescript' })}>
          <Image
            src="/logo_typescript.png"
            width={20}
            height={20}
            alt="logo of Typescript"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className="text-lg ml-2">Typescript</p>
        </Link>
      </div>

      <Card className="mt-4">
        <CardContent>
          The application that you currently seeing.
          <br />
          <br />
          The difference with checked is that portofolio is almost 100% static and doesn’t require a backend or a
          database.
          <br />
          <br />
          For this project I used NextJs, tailwind and Typescript .
        </CardContent>
      </Card>
    </section>
  );
}
