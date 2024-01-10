import Image from 'next/image';

function Element({ href, alt, src }: { href: string; alt: string; src: string }) {
  return (
    <a href={href} target="_blank">
      <div className="relative w-[90px] h-[90px] sm:w-32 sm:h-32 md:w-40 md:h-40 md:mx-4 lg:w-48 lg:h-48 lg:mx-6">
        <Image alt={alt} src={src} layout="fill" />
      </div>
    </a>
  );
}

export default function Stack() {
  return (
    <section className="mt-52 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
        <Element href="https://react.dev/" alt="logo of React" src="/logo_react.png" />
        <Element href="https://nextjs.org/" alt="logo of NextJS" src="/logo_nextjs.png" />
        <Element href="https://www.typescriptlang.org/" alt="logo of Typescipt" src="/logo_typescript.png" />
        <Element href="https://tailwindcss.com/" alt="logo of Tailwind" src="/logo_tailwind.png" />
        <Element href="https://supabase.com/" alt="logo of Supabase" src="/logo_supabase.png" />
        <Element href="https://www.postgresql.org/" alt="logo of PostgreSQL" src="/logo_postgresql.png" />
      </div>
    </section>
  );
}
