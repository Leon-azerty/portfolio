import chevron from '@/public/chevron.png';
import Image from 'next/image';

export default function Chevron() {
  return (
    <div className="hidden lg:flex w-full h-40 justify-around mt-96 2xl:mt-40 animate-bounce">
      <Image src={chevron} alt="image of chevron" className="w-40 h-40" />
      <Image src={chevron} alt="image of chevron" className="w-40 h-40" />
    </div>
  );
}
