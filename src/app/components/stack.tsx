import nextjsLogo from '@/public/logo_nextjs.png';
import postgresLogo from '@/public/logo_postgresql.png';
import reactLogo from '@/public/logo_react.png';
import supabaseLogo from '@/public/logo_supabase.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import typescriptLogo from '@/public/logo_typescript.png';
import Image, { StaticImageData } from 'next/image';

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
      <a href={href} target="_blank" className="z-30 flex flex-col items-start lg:items-center 2xl:mb-4 2xl:flex-row">
        <Image alt={alt} src={src} className="w-12" />
      </a>
      <p className="flex items-center text-xl font-bold">{name}</p>
      <p className="mt-4 hidden text-left lg:block 2xl:mt-0 ">{description}</p>
    </div>
  );
}

const STACK = [
  {
    name: 'React',
    href: 'https://react.dev/',
    alt: 'logo of React',
    src: reactLogo,
    description:
      'JavaScript library for building dynamic and interactive user interfaces using a component-based architecture for reusability and efficient updates.',
  },
  {
    name: 'NextJS',
    href: 'https://nextjs.org/',
    alt: 'logo of NextJS',
    src: nextjsLogo,
    description:
      'Framework for building fast, server-rendered React applications with built-in features like automatic code splitting and server-side rendering.',
  },
  {
    name: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    alt: 'logo of Typescipt',
    src: typescriptLogo,
    description:
      'Statically typed superset of JavaScript, enhancing code reliability by enabling type checking during development.',
  },
  {
    name: 'Tailwind',
    href: 'https://tailwindcss.com/',
    alt: 'logo of Tailwind',
    src: tailwindLogo,
    description: 'Framework that provides a set of pre-defined utility classes for styling without writing custom CSS.',
  },
  {
    name: 'Supabase',
    href: 'https://supabase.com/',
    alt: 'logo of Supabase',
    src: supabaseLogo,
    description:
      'Platform that simplifies backend development, offering features like authentication, real-time data synchronization, and database management, all while leveraging PostgreSQL.',
  },
  {
    name: 'PostreSQL',
    href: 'https://www.postgresql.org/',
    alt: 'logo of PostgreSQL',
    src: postgresLogo,
    description:
      'Relational database management system widely used for data storage, offering advanced features, ACID compliance, and strong support for complex data types.',
  },
];

export default function Stack() {
  return (
    <section className="mt-32" id="stack">
      <p className="text-4xl">Stack</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-12 p-4">
          {STACK.map((element) => (
            <Element
              key={element.name}
              href={element.href}
              alt={element.alt}
              src={element.src}
              description={element.description}
              name={element.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
