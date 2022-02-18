import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t mt-10 z-10">
      <p className="flex items-center justify-center">
        Powered by
        <Image
          src="/lovelove.png"
          alt="React love"
          className="w-full"
          width={80}
          height={80}
        />
      </p>
    </footer>
  );
}
