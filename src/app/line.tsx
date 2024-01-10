import Image from "next/image";

export default function Line() {
  return (
    <div className="relative w-full h-[90px] md:h-52 md:mx-4 lg:h-64 lg:mx-6">
      <Image alt="just a line" src="/line.png" fill sizes="100vw" />
    </div>
  );
}
