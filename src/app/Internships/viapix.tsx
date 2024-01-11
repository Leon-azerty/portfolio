import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import pytorchLogo from '@/public/logo_pytorch.png';
import delphiLogo from '@/public/logo_delphi.png';
import Badge from '@/badge';

export default function Viapix() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <Image
          src="/logo_viapix.png"
          alt="logo of Viapix"
          width={90}
          height={60}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <p className="text-2xl ml-2">Viapix</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        <Badge href="" alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
        <Badge href="" alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
      </div>

      <Card className="mt-4">
        <CardContent>
          I joined Viapix during my 2nd year in Epitech as data scientist.
          <br />I could train a Deep Learning model to recognize the road on image with Pytorch, in addition to that I
          labelized image used for the training. It was a semantic segmentation so the training was really long, during
          this time I was also able to develop a map like Google map thanks to the Open Street Map tiles, this map was
          used to display the road precisely (thanks to the DL model).
        </CardContent>
      </Card>
    </section>
  );
}
