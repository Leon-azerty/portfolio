import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

export default function Badge({
  alt,
  src,
  text,
  className,
}: {
  alt: string;
  src: StaticImageData;
  text: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        'mr-2 inline-flex min-w-max items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-white transition-colors focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:outline-hidden dark:border-slate-800 dark:focus:ring-slate-300',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        style={{
          width: '20px',
          height: 'auto',
        }}
      />
      <p className="ml-2 text-lg text-white">{text}</p>
    </div>
  );
}
