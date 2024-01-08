import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';

export default function Piwio() {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <Image src="/logo_piwio.png" alt="logo of Piwio" width={90} height={60} />
        <p className="text-2xl ml-2">Piwio</p>
      </div>

      <div className="flex overflow-x-auto whitespace-no-wrap mt-4" /* animate-infinite-left-to-right */>
        {/* Badge flutter */}
        <Link href="" className={badgeVariants({ variant: 'flutter' })}>
          <Image src="/logo_flutter.png" width={20} height={20} alt="logo of Flutter" />
          <p className="text-lg ml-2">Flutter</p>
        </Link>

        {/* Badge supabase */}
        <Link href="" className={badgeVariants({ variant: 'supabase' })}>
          <Image src="/logo_supabase.png" width={20} height={20} alt="logo of Supabase" />
          <p className="text-lg ml-2">Supabase</p>
        </Link>
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
