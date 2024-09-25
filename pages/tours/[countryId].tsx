import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Sniglet } from "next/font/google";
import SingleHotel from "@/components/singleHotel";
interface destinationProp {
  data: {
    image: string;
    destination: string;
    price: number;
  };
  data2: []; // Define the type of your data here
}
const SingleTour: React.FC<destinationProp> = ({ data, data2 }) => {
  console.log(data2);
  const [individual, setIndividual] = useState(1);
  const [day, setDay] = useState(1);
  return (
    <div className="w-full h-auto">
      <section className="h-screen w-full relative flex justify-center items-center">
        <Image
          width={1200}
          height={700}
          src={data.image}
          alt=""
          className="w-full h-full z-[-1] absolute top-0 left-0"
        />
        <div className="text-center text-white">
          <h1 className="text-[64px] font-bold">{data.destination}</h1>
          <span className="text-[24px] font-medium">
            {"Average Price For Individual " + data.price + "$/day"}
          </span>
        </div>
      </section>
      <div className="w-full h-auto flex justify-center items-center my-10">
        <div className="w-[200px] h-7 bg-orange-300 flex justify-between  border-4 border-orange-300">
          <div className="bg-white flex items-center">
            <span className="border border-orange-300 ">Individuals:</span>

            <input
              type="number"
              className="w-10 border border-orange-300"
              value={individual}
              onChange={(e) => {
                setIndividual(+e.target.value);
              }}
              min={1}
            />
          </div>
          <div className="bg-white flex items-center">
            <span className="border border-orange-300">Days:</span>
            <input
              type="number"
              className="border border-orange-300 w-10"
              value={day}
              onChange={(e) => {
                setDay(+e.target.value);
              }}
              min={1}
            />
          </div>
        </div>
      </div>
      <section>
        <div className="m-auto w-[50%] h-auto">
          {data2.map((hotel) => (
            <SingleHotel hotel={hotel} individuals={individual} days={day} />
          ))}
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  if (!params || Array.isArray(params.countryId)) {
    return {
      notFound: true,
    };
  }

  const { countryId } = params;

  // Fetch data from an API
  const res = await fetch(
    `https://silly-funny-lint.glitch.me/api/destinations/${countryId}`
  );
  const data = await res.json();
  const res2 = await fetch(
    `https://silly-funny-lint.glitch.me/api/hotels/${data.destination}`
  );
  const data2 = await res2.json();
  return {
    props: {
      data,
      data2,
    },
  };
};
export default SingleTour;
