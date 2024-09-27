import Image from "next/image";

import { GetServerSideProps } from "next";
import TourCard from "@/components/singleTour";
import Link from "next/link";
interface destinationsProps {
  data: []; // Define the type of your data here
}
export const Tours: React.FC<destinationsProps> = ({ data }) => {
  return (
    <div className="w-full h-auto">
      <section className="h-screen w-full relative flex justify-center items-center">
        <Image
          width={1200}
          height={700}
          src={"/tours.png"}
          alt=""
          className="w-full h-full z-[-1] absolute top-0 left-0"
        />
        <div className="text-center text-white">
          <h1 className="text-[64px] font-bold">Travel Packages</h1>
          <span className="text-[24px] font-medium">
            {"Home" + " > " + "Packagee"}
          </span>
        </div>
      </section>
      <section className="h-auto p-10">
        <div className="xl:max-w-[35%] max-w-full flex flex-col  justify-between">
          <h2 className="md:text-[60px] text-[30px] font-bold">
            Popular Destination
          </h2>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-auto w-full gap-7 mt-10">
          {data.map(
            (destination: {
              _id: string;
              image: string;
              destination: string;
              price: number;
            }) => (
              <Link
              key={destination._id}
              href={`tours/${destination._id}`}>
                <TourCard
                  image={destination.image}
                  name={destination.destination}
                  price={destination.price}
                />
              </Link>
            )
          )}
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from an API
  const res = await fetch(
    "https://silly-funny-lint.glitch.me/api/destinations"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
export default Tours;
