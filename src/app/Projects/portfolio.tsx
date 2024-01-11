import { Card, CardContent } from '@/components/ui/card';
import reactLogo from '@/public/logo_react.png';
import nextjsLogo from '@/public/logo_nextjs.png';
import tailwindLogo from '@/public/logo_tailwind.png';
import typescriptLogo from '@/public/logo_typescript.png';
import Badge from '@/badge';

export default function Portfolio() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <p className="text-2xl">Portfolio</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        <Badge href="" alt="logo of React" src={reactLogo} text="React" className="bg-react" />
        <Badge href="" alt="logo of NextJS" src={nextjsLogo} text="NextJs" className="bg-nextjs" />
        <Badge href="" alt="logo of Tailwind" src={tailwindLogo} text="Tailwind" className="bg-tailwind" />
        <Badge href="" alt="logo of Typescript" src={typescriptLogo} text="Typescript" className="bg-typescript" />
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
