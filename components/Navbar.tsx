import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full h-40 bg-transparent z-20">
      <nav className="w-full absolute h-full bg-[#120B0B] opacity-50 "></nav>
      <div className="flex absolute w-full h-full items-center justify-around">
        <Image src={"/logo1 1.png"} alt="" width={375} height={82} className="md:block hidden" />
        <Image src={"/logo1 1.png"} alt="" width={200} height={45} className="block md:hidden" />
        <ul className=" justify-between w-[60%] text-white hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Packages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 inline-block md:hidden"><path fill="white" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>        </div>
    </div>
  );
}
