import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full max-h-20 border-t z-10">
      <p className="flex items-center justify-center">
        Powered by
        <Image
          src="/lovelove.png"
          alt="React love"
          className="w-full"
          width={70}
          height={70}
        />
      </p>
    </footer>
  );
}
