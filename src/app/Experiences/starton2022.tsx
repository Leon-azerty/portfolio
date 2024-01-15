import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { TfiMedall } from 'react-icons/tfi';

export default function Starton2022() {
  return (
    <section className="mt-4">
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <TfiMedall />
          <p className="ml-2">Hackaton, Starton 3th 2022</p>
        </CardTitle>
        <CardContent className="p-0 pt-4 lg:h-24">
          As a Front end developper React in intercation with Back and BlockChain developper
        </CardContent>
      </Card>
    </section>
  );
}
