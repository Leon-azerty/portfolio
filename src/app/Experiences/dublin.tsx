import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { TfiCup } from 'react-icons/tfi';

export default function Dublin() {
  return (
    <section className="mt-4">
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <Image src="/flag_ireland.png" width="30" height="30" alt="Ireland's flag" />
          <p className="ml-2">Currently in Dublin</p>
        </CardTitle>
        <CardContent className="p-0 pt-4">
          Currently in my fourth year in Epitech, I study at the Technological University of Dublin in program “Data
          analysis”
        </CardContent>
      </Card>
    </section>
  );
}
