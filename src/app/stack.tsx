import Image from 'next/image';

export default function Stack() {
  return (
    <section className="mt-52">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
        <a href="https://react.dev/" target="_blank">
          <Image alt="logo of React" src="/logo_react.png" width={90} height={90} layout="responsive" />
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <Image alt="logo of NextJS" src="/logo_nextjs.png" width={90} height={90} layout="responsive" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <Image alt="logo of Typescipt" src="/logo_typescript.png" width={90} height={90} layout="responsive" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <Image alt="logo of Tailwind" src="/logo_tailwind.png" width={90} height={90} layout="responsive" />
        </a>
        <a href="https://supabase.com/" target="_blank">
          <Image alt="logo of Supabase" src="/logo_supabase.png" width={90} height={90} layout="responsive" />
        </a>
        <a href="https://www.postgresql.org/" target="_blank">
          <Image alt="logo of PostgreSQL" src="/logo_postgresql.png" width={90} height={90} layout="responsive" />
        </a>
      </div>
    </section>
  );
}
