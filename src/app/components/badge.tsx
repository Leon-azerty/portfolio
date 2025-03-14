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
      className={`inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 mr-2 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 text-white min-w-max ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        style={{
          width: '20px',
          height: 'auto',
        }}
      />
      <p className="text-white text-lg ml-2">{text}</p>
    </div>
  );
}
