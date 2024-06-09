import Image from 'next/image';
import line from '../../public/line.png';

export default function Line() {
  return (
    <div className="relative w-full h-[90px] md:h-52 md:mx-4 lg:h-64 lg:mx-6">
      <Image alt="just a line" src={line} fill />
    </div>
  );
}
