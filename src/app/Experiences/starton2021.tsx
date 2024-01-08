import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { TfiCup } from 'react-icons/tfi';

export default function Starton2021() {
  return (
    <section className="mt-4">
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <TfiCup />
          <p className="ml-2">Hackaton, Starton 2nd 2021</p>
        </CardTitle>
        <CardContent className="p-0 pt-4">
          As a Front end developper React in intercation with Back and BlockChain developper
        </CardContent>
      </Card>
    </section>
  );
}
