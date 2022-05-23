import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full max-h-20 border-t z-10">
      <div className="flex items-center justify-center pt-4">
        <p className="h-full">Powered by</p>
        <Image
          src="/lovelove.png"
          alt="React love"
          className="w-full"
          width={70}
          height={70}
        />
      </div>
    </footer>
  );
}
