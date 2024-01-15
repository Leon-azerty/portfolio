import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import supabaseLogo from '@/public/logo_supabase.png';
import flutterLogo from '@/public/logo_flutter.png';
import piwioLogo from '@/public/logo_piwio.png';
import Badge from '@/badge';

export default function Piwio() {
  return (
    <section className="mt-4">
      <div className="flex items-center lg:hidden">
        <Image
          src={piwioLogo}
          alt="logo of Piwio"
          style={{
            width: '90px',
            height: 'auto',
          }}
        />
        <p className="text-2xl ml-2">Piwio</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4 lg:hidden" /* animate-infinite-left-to-right */>
        <Badge alt="logo of Flutter" src={flutterLogo} text="Flutter" className="bg-flutter" />
        <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
      </div>

      <Card className="mt-4">
        <CardHeader className="hidden lg:block">
          <div className="flex">
            <Image
              src={piwioLogo}
              alt="logo of Piwio"
              style={{
                width: '90px',
                height: 'auto',
              }}
            />
            <div>
              <CardTitle className="hidden: lg:block">Piwio</CardTitle>
              <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
                <Badge alt="logo of Flutter" src={flutterLogo} text="Flutter" className="bg-flutter" />
                <Badge alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          I joined Piwio as a Flutter developper, at this period i wasn’t sure that react will be the techno that i want
          to learn and master.
          <br />
          At Piwio I developped many softwares for different devices (Windows, android). I could learn the parallel
          computing in flutter, how to use DLL for sync data with IoT. I could discover Supabase to save the results of
          the embedded system on database.
        </CardContent>
      </Card>
    </section>
  );
}
