import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from "next/image";

export default function Berlin() {
  return (
    <section className="mt-4">
      <Card className="p-4">
        <CardTitle className="flex items-center">
          <Image
            src="/flag_germany.png"
            width="30"
            height="30"
            alt="German's flag"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className="ml-2">8 month Berlin</p>
        </CardTitle>
        <CardContent className="p-0 pt-4">
          During my second year in Epitech I had the oppurtinity to study in Berlin
        </CardContent>
      </Card>
    </section>
  );
}
