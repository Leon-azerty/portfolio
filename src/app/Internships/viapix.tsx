import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import pytorchLogo from '@/public/logo_pytorch.png';
import delphiLogo from '@/public/logo_delphi.png';
import Badge from '@/badge';
import viapixLogo from '@/public/logo_viapix.png';

export default function Viapix() {
  return (
    <section className="mt-4 h-full">
      <div className="flex items-center lg:hidden">
        <Image
          src={viapixLogo}
          alt="logo of Viapix"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <p className="text-2xl ml-2">Viapix</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4 lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
        <Badge alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
      </div>

      <Card className="mt-4 h-full">
        <CardHeader className="hidden lg:block">
          <div className="flex">
            <Image
              src={viapixLogo}
              alt="logo of Viapix"
              style={{
                width: '90px',
                height: 'auto',
              }}
            />
            <div>
              <CardTitle className="hidden: lg:block">Viapix</CardTitle>
              <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
                <Badge alt="logo of Pytorch" src={pytorchLogo} text="Pytorch" className="bg-pytorch" />
                <Badge alt="logo of Delphi" src={delphiLogo} text="Delphi" className="bg-delphi" />
              </div>
            </div>
          </div>
        </CardHeader>
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
