import Image, { StaticImageData } from 'next/image';
import reactLogo from '@/public/logo_react.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import typescriptLogo from '@/public/logo_typescript.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import supabaseLogo from '@/public/logo_supabase.png';
import postgresLogo from '@/public/logo_postgresql.png';

const descriptions = {
  react:
    'JavaScript library for building dynamic and interactive user interfaces using a component-based architecture for reusability and efficient updates.',
  nextjs:
    'Framework for building fast, server-rendered React applications with built-in features like automatic code splitting and server-side rendering.',
  typescript:
    'Statically typed superset of JavaScript, enhancing code reliability by enabling type checking during development.',
  tailwind: 'Framework that provides a set of pre-defined utility classes for styling without writing custom CSS.',
  supabase:
    'Platform that simplifies backend development, offering features like authentication, real-time data synchronization, and database management, all while leveraging PostgreSQL.',
  postgres:
    'Relational database management system widely used for data storage, offering advanced features, ACID compliance, and strong support for complex data types.',
};

function Element({
  href,
  alt,
  src,
  description,
}: {
  href: string;
  alt: string;
  src: StaticImageData;
  description: string;
}) {
  return (
    <a href={href} target="_blank" className="z-30 flex flex-col items-center 2xl:flex-row 2xl:mb-4">
      <Image alt={alt} src={src} className="2xl:w-28" />
      <p className="hidden lg:block text-justify mt-4 2xl:ml-2 2xl:mt-0 2xl:text-center">{description}</p>
    </a>
  );
}

export default function Stack() {
  return (
    <section className="mt-52 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
        <Element href="https://react.dev/" alt="logo of React" src={reactLogo} description={descriptions.react} />
        <Element href="https://nextjs.org/" alt="logo of NextJS" src={nextjsLogo} description={descriptions.nextjs} />
        <Element
          href="https://www.typescriptlang.org/"
          alt="logo of Typescipt"
          src={typescriptLogo}
          description={descriptions.typescript}
        />
        <Element
          href="https://tailwindcss.com/"
          alt="logo of Tailwind"
          src={tailwindLogo}
          description={descriptions.tailwind}
        />
        <Element
          href="https://supabase.com/"
          alt="logo of Supabase"
          src={supabaseLogo}
          description={descriptions.supabase}
        />
        <Element
          href="https://www.postgresql.org/"
          alt="logo of PostgreSQL"
          src={postgresLogo}
          description={descriptions.postgres}
        />
      </div>
    </section>
  );
}
