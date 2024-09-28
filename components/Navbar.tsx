import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-40 bg-transparent z-20">
      <nav className="w-full absolute h-full bg-[#120B0B] opacity-50 "></nav>
      <div className="flex absolute w-full h-full items-center justify-around">
        <Image
          src={"/logo1 1.png"}
          alt=""
          width={375}
          height={82}
          className="md:block hidden"
        />
        <Image
          src={"/logo1 1.png"}
          alt=""
          width={200}
          height={45}
          className="block md:hidden"
        />
        <ul className=" justify-around w-[200px] text-white flex">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/tours"}>
            <li>Tours</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
