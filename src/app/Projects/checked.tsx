import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import reactLogo from '@/public/logo_react.png';
import supabaseLogo from '@/public/logo_supabase.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import tailwindLogo from '@/public/logo_tailwind.png';
// import githubLogo from '@/public/logo_github.png';
import Badge from '@/badge';

function BadgeLine({ className }: { className?: string }) {
  return (
    <div className={`flex overflow-x-auto whitespace-no-wrap mt-4 ${className}`} /* animate-infinite-left-to-right */>
      <Badge href="https://react.dev/" alt="logo of React" src={reactLogo} text="React" className="bg-react" />
      <Badge href="https://nextjs.org/" alt="logo of Nextjs" src={nextjsLogo} text="Nextjs" className="bg-nextjs" />
      <Badge
        href="https://supabase.com/"
        alt="logo of Supabase"
        src={supabaseLogo}
        text="Supabase"
        className="bg-supabase"
      />
      <Badge
        href="https://tailwindcss.com/"
        alt="logo of Tailwind"
        src={tailwindLogo}
        text="Tailwind"
        className="bg-tailwind"
      />
    </div>
  );
}

export default function Checked() {
  return (
    <section className="mt-4 ">
      <div className="flex items-center lg:hidden">
        <p className="text-2xl">Checked, Todo app</p>
        <a href="https://checkd.online/login" target="_blank">
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </a>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start">
        <Image
          alt="screenshot of Checked"
          src="/checked.png"
          width={100}
          height={100}
          className="max-w-xl "
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div className="flex flex-col lg:flex-col-reverse lg:ml-4">
          <BadgeLine />

          <Card className="mt-4 ">
            <CardHeader className="hidden lg:block">
              <CardTitle>Checked, Todo app</CardTitle>
              <CardDescription className="flex justify-between">
                <a href="https://checkd.online/login" target="_blank">
                  Checkd.online
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              As a customer of apps like Notion, obsidian etc. I naturally wanted to create a project resembling what I
              love.
              <br />
              The main feature is a system of tag, which allows user to create a todo with tags and sort todos by tags.
              <br />
              <br />
              During the developpment I could learn the server components with NextJs, how to host a project with vercel
              and modify the domain name.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
