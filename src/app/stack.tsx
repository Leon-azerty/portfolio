import Image, { StaticImageData } from 'next/image';
import reactLogo from '@/public/logo_react.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import typescriptLogo from '@/public/logo_typescript.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import supabaseLogo from '@/public/logo_supabase.png';
import postgresLogo from '@/public/logo_postgresql.png';

function Element({ href, alt, src }: { href: string; alt: string; src: StaticImageData }) {
  return (
    <a href={href} target="_blank">
      {/* <div className="relative w-[90px] h-[90px] sm:w-32 sm:h-32 md:w-4 md:h-40 md:mx-4 lg:w-4 lg:h-48 lg:mx-6"> */}
      <Image alt={alt} src={src} />
      {/* </div> */}
    </a>
  );
}

export default function Stack() {
  return (
    <section className="mt-52 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
        <Element href="https://react.dev/" alt="logo of React" src={reactLogo} />
        <Element href="https://nextjs.org/" alt="logo of NextJS" src={nextjsLogo} />
        <Element href="https://www.typescriptlang.org/" alt="logo of Typescipt" src={typescriptLogo} />
        <Element href="https://tailwindcss.com/" alt="logo of Tailwind" src={tailwindLogo} />
        <Element href="https://supabase.com/" alt="logo of Supabase" src={supabaseLogo} />
        <Element href="https://www.postgresql.org/" alt="logo of PostgreSQL" src={postgresLogo} />
      </div>
    </section>
  );
}
