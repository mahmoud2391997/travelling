import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-40 bg-transparent z-20">
      <nav className="w-full absolute h-full bg-[#120B0B] opacity-50 "></nav>
      <div className="flex absolute w-full h-full items-center justify-around">
        <Image src={"/logo1 1.png"} alt="" width={375} height={82} />
        <ul className="flex justify-between w-[60%] text-white ">
          <li>Home</li>
          <li>About</li>
          <li>Packages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
