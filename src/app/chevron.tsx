import Image from "next/image";

export default function Chevron() {
  return (
    <div className="hidden lg:block w-full h-40">
      <Image
        src="/chevron.png"
        alt="image of chevron"
        className="w-40 h-40"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
}
