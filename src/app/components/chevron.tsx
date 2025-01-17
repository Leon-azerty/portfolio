import chevron from '@/public/chevron.png';
import Image from 'next/image';

export default function Chevron() {
  return (
    <div className="mt-96 hidden h-40 w-full animate-bounce justify-around lg:flex 2xl:mt-40">
      <Image src={chevron} alt="image of chevron" className="h-40 w-40" />
      <Image src={chevron} alt="image of chevron" className="h-40 w-40" />
    </div>
  );
}
