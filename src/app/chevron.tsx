import Image from 'next/image';

export default function Chevron() {
  return (
    <div className="hidden lg:flex w-full h-40 justify-around mt-96">
      <Image src="/chevron.png" alt="image of chevron" className="w-40 h-40" width={100} height={100} />
      <Image src="/chevron.png" alt="image of chevron" className="w-40 h-40" width={100} height={100} />
    </div>
  );
}
