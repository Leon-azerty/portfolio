import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export default function Viapix() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <Image src="/logo_viapix.png" alt="logo of Viapix" width={90} height={60} />
        <p className="text-2xl ml-2">Viapix</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        {/* Badge pytorch */}
        <Link href="" className={badgeVariants({ variant: 'pytorch' })}>
          <Image src="/logo_pytorch.png" width={20} height={20} alt="logo of Pytorch" />
          <p className="text-lg ml-2">Pytorch</p>
        </Link>

        {/* Badge delphi */}
        <Link href="" className={badgeVariants({ variant: 'delphi' })}>
          <Image src="/logo_delphi.png" width={20} height={20} alt="logo of Delphi" />
          <p className="text-lg ml-2">Delphi</p>
        </Link>
      </div>

      <Card className="mt-4">
        <CardContent>
          I joined Viapix during my 2nd year in Epitech as data scientist.
          <br />I could train a Deep Learning model to recognize the road on image with Pytorch, in addition to that I
          labelized image used for the training. It was a semantic segmentation so the training was really long, during
          this time I was also able to develop a map like Google map thanks to the Open Street Map tiles, this map was
          used to display the road precisely (thanks to the DL model).{' '}
        </CardContent>
      </Card>
    </section>
  );
}
