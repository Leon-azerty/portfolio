import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import supabaseLogo from '@/public/logo_supabase.png';
import flutterLogo from '@/public/logo_flutter.png';
import Badge from '@/badge';

export default function Piwio() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <Image
          src="/logo_piwio.png"
          alt="logo of Piwio"
          width={90}
          height={60}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <p className="text-2xl ml-2">Piwio</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        <Badge href="" alt="logo of Flutter" src={flutterLogo} text="Flutter" className="bg-flutter" />
        <Badge href="" alt="logo of Supabase" src={supabaseLogo} text="Supabase" className="bg-supabase" />
      </div>

      <Card className="mt-4">
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
