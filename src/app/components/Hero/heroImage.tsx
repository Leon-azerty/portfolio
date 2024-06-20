'use client';

import HeaderImage from '@/public/M.N.2.png';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from '../skeleton';

export default function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex h-52 w-24 items-center sm:h-56 sm:w-32 md:h-60 md:w-40 xl:w-48 2xl:mr-8">
      {!loaded && <Skeleton />}
      <Image
        className={`rounded-full ${!loaded && 'hidden'}`}
        src={HeaderImage}
        alt="Beautiful picture of myself"
        priority
        width={200}
        height={200}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
