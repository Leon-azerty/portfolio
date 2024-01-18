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
  name,
}: {
  href: string;
  alt: string;
  src: StaticImageData;
  description: string;
  name: string;
}) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <p className="text-xl flex items-center">{name}</p>
      <a href={href} target="_blank" className="z-30 flex flex-col items-start lg:items-center 2xl:flex-row 2xl:mb-4">
        <Image alt={alt} src={src} className="w-24 md:w-32 lg:h-32 2xl:w-28" />
        <p className="hidden lg:block text-justify mt-4 2xl:ml-2 2xl:mt-0 2xl:text-center">{description}</p>
      </a>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="mt-32" id="stack">
      <p className="text-4xl">Stack</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-12 p-4">
          <Element
            name="React"
            href="https://react.dev/"
            alt="logo of React"
            src={reactLogo}
            description={descriptions.react}
          />
          <Element
            name="NextJS"
            href="https://nextjs.org/"
            alt="logo of NextJS"
            src={nextjsLogo}
            description={descriptions.nextjs}
          />
          <Element
            name="Typescript"
            href="https://www.typescriptlang.org/"
            alt="logo of Typescipt"
            src={typescriptLogo}
            description={descriptions.typescript}
          />
          <Element
            name="Tailwind"
            href="https://tailwindcss.com/"
            alt="logo of Tailwind"
            src={tailwindLogo}
            description={descriptions.tailwind}
          />
          <Element
            name="Supabase"
            href="https://supabase.com/"
            alt="logo of Supabase"
            src={supabaseLogo}
            description={descriptions.supabase}
          />
          <Element
            name="PostreSQL"
            href="https://www.postgresql.org/"
            alt="logo of PostgreSQL"
            src={postgresLogo}
            description={descriptions.postgres}
          />
        </div>
      </div>
    </section>
  );
}
