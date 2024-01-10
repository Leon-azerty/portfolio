import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export default function Checked() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <p className="text-2xl">Checked, Todo app</p>
        <a href="https://checkd.online/login" target="_blank">
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </a>
      </div>
      <div className="flex justify-center">
        <Image
          alt="screenshot of Checked"
          src="/checked.png"
          width={100}
          height={100}
          layout="responsive"
          className="max-w-xl "
        />
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        {/* Badge React */}
        <Link href="" className={badgeVariants({ variant: 'react' })}>
          <Image src="/logo_react.png" width={20} height={20} alt="logo of React" />
          <p className="text-lg ml-2">React</p>
        </Link>

        {/* Badge Nextjs */}
        <Link href="" className={badgeVariants({ variant: 'nextjs' })}>
          <Image src="/logo_nextjs.png" width={20} height={20} alt="logo of NextJS" />
          <p className="text-lg ml-2">NextJS</p>
        </Link>

        {/* Badge Supabase */}
        <Link href="" className={badgeVariants({ variant: 'supabase' })}>
          <Image src="/logo_supabase.png" width={20} height={20} alt="logo of Supabase" />
          <p className="text-lg ml-2">Supabase</p>
        </Link>

        {/* Badge Tailwind */}
        <Link href="" className={badgeVariants({ variant: 'tailwind' })}>
          <Image src="/logo_tailwind.png" width={20} height={20} alt="logo of Tailwind" />
          <p className="text-lg ml-2">Tailwind</p>
        </Link>
      </div>

      <Card className="mt-4">
        <CardContent>
          As a customer of apps like Notion, obsidian etc. I naturally wanted to create a project resembling what I
          love.
          <br />
          The main feature is a system of tag, which allows user to create a todo with tags and sort todos by tags.
          <br />
          <br />
          During the developpment I could learn the server components with NextJs, how to host a project with vercel and
          modify the domain name.
        </CardContent>
      </Card>
    </section>
  );
}
