'use client';

import HeaderImage from '@/public/M.N.2.png';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from './skeleton';

export default function BannerImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-24 h-52 sm:w-32 sm:h-56 md:w-40 md:h-60 xl:w-48 2xl:mr-8 flex items-center">
      {!loaded && <Skeleton />}
      <Image
        className={`rounded-full ${!loaded && 'hidden'}`}
        src={HeaderImage}
        alt="Beautiful picture of myself"
        priority
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
