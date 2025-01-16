import line from '@/public/line.png';
import Image from 'next/image';

export default function Line() {
  return (
    <div className="relative h-[90px] w-full md:mx-4 md:h-52 lg:mx-6 lg:h-64">
      <Image alt="just a line" src={line} fill />
    </div>
  );
}
