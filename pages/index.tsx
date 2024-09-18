import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="absolute top-0 w-full">
      <div
        className="w-full h-screen bg-black bg-no-repeat bg-cover relative"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        <div className=" w-full  text-white absolute top-[30%]">
          <div className="w-[40%]  ml-[15%] text-[90px] font-bold">
            Make in
            <br /> your journey.
          </div>
          <div className="w-[29%] ml-[15%] mt-10 text-[18px]">
            Explore the world with what you love beautiful
            <br /> natural beauty.
          </div>
          <div className="w-[29%] ml-[15%] mt-10 text-[22px]">
            <span className="font-bold ml-1">Popular Place :</span>
            Bali, Istanbul, Rome, Paris.
          </div>
        </div>
      </div>
      <section className="bg-white flex flex-col ml-[5%]  w-[90%] h-screen">
        <div className="flex flex-col w-[40%]  h-[19%] justify-between mt-[5%]">
          <h3>TESTIMONIAL</h3>
          <h1 className=" text-[60px] font-semibold">What our client say</h1>
          <p className="w-[60%]">
            Create a visual identity for your company and a overall brand
          </p>
        </div>
        <div className="grid grid-cols-3 w-[88.88%] m-auto gap-[5%] h-[48%]">
          <div className="w-full flex flex-col items-center justify-around h-full">
            <div className="flex flex-col items-center justify-between h-2/5">
              <Image width={100} height={100} src={"/client 1.png"} alt="" />
              <h4 className="font-semibold text-[24px]">Sara Jay</h4>
              <span>Treveller</span>
            </div>
            <div className="flex flex-col w-[60%]">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <p>
                Before we define any approach, we need to deline the brands
                overall goal. We then need to dive.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-around h-full">
            <div className="flex flex-col items-center justify-between h-2/5">
              <Image width={100} height={100} src={"/client 2.png"} alt="" />
              <h4 className="font-semibold text-[24px]">Cristian Daniel</h4>
              <span>Treveller</span>
            </div>
            <div className="flex flex-col w-[60%]">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <p>
                Before we define any approach, we need to deline the brands
                overall goal. We then need to dive.
              </p>
            </div>
          </div>{" "}
          <div className="w-full flex flex-col items-center justify-around h-full">
            <div className="flex flex-col items-center justify-between h-2/5">
              <Image width={100} height={100} src={"/client 3.png"} alt="" />
              <h4 className="font-semibold text-[24px]">Kausar Hasan</h4>
              <span>Treveller</span>
            </div>
            <div className="flex flex-col w-[60%]">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"#F4BC61"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--main-color)"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <p>
                Before we define any approach, we need to deline the brands
                overall goal. We then need to dive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen relative">
        <div
          className="w-full h-[663px] bg-cover bg-center flex justify-center"
          style={{ backgroundImage: "url('/unsplash.png')" }}
        >
          <div className="w-[34%] h-[117.5px] mt-[100px] text-white">
            <h1 className="text-[60px] font-bold">Why choose Us?</h1>
            <p>our services have been trusted by world travelers.</p>
          </div>
        </div>
        <div className="w-[65%] h-[50%] grid grid-cols-3 gap-[10%] absolute top-[40%] left-[17%]">
          <div className="w-full h-full rounded-md bg-white p-4">
            <div className=" flex flex-col items-start justify-around h-full">
              <Image width={100} height={100} src={"/Group 31.png"} alt="" />
              <h3 className="font-semibold text-[24px]">Best Service</h3>
              <p className="font-medium text-[18px]">
                our service is reliable and convenient, our service is quality.
              </p>
              <button className="flex flex-start items-center">
                <span className="mr-1">Learn more</span>
                <svg
                  width="31"
                  height="13"
                  viewBox="0 0 31 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.6518 6.63269L20.6518 0.859188V12.4062L30.6518 6.63269ZM0.976196 7.63269H21.6518V5.63269H0.976196V7.63269Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-full rounded-md bg-white p-4">
            <div className=" flex flex-col items-start justify-around h-full">
              <Image
                width={100}
                height={100}
                src={"/Group 31 (1).png"}
                alt=""
              />
              <h3 className="font-semibold text-[24px]">Best Service</h3>
              <p className="font-medium text-[18px]">
                our service is reliable and convenient, our service is quality.
              </p>
              <button className="flex flex-start items-center">
                <span className="mr-1">Learn more</span>
                <svg
                  width="31"
                  height="13"
                  viewBox="0 0 31 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.6518 6.63269L20.6518 0.859188V12.4062L30.6518 6.63269ZM0.976196 7.63269H21.6518V5.63269H0.976196V7.63269Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-full rounded-md bg-white p-4">
            <div className=" flex flex-col items-start justify-around h-full">
              <Image
                width={100}
                height={100}
                src={"/Group 31 (2).png"}
                alt=""
              />
              <h3 className="font-semibold text-[24px]">Best Service</h3>
              <p className="font-medium text-[18px]">
                our service is reliable and convenient, our service is quality.
              </p>
              <button className="flex flex-start items-center">
                <span className="mr-1">Learn more</span>
                <svg
                  width="31"
                  height="13"
                  viewBox="0 0 31 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.6518 6.63269L20.6518 0.859188V12.4062L30.6518 6.63269ZM0.976196 7.63269H21.6518V5.63269H0.976196V7.63269Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
