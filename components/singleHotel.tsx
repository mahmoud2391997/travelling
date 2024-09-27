import Image from "next/image";
import Link from "next/link";
interface hotelProp {
  hotel: {
    name: string;
    rating: number;
    price: number;
    image: string;
  };
  individuals: number;
  days: number;
  destination: string;
}
const SingleHotel: React.FC<hotelProp> = ({
  hotel,
  individuals,
  days,
  destination,
}) => {
  return (
    <div className="w-full  md:flex flex-col md:flex-row my-5">
      <Image width={300} height={300} src={hotel.image} alt="" />
      <div className="md:w-[70%] w-[300px] flex  justify-between items-end flex-col p-3">
        <div className=" w-full flex justify-between">
          <span>Hotel: {hotel.name}</span>{" "}
          <div className="flex border border-blue-600 rounded">
            <span>
              {hotel.rating * 2 > 9
                ? "Excellent"
                : hotel.rating * 2 > 8
                ? "Very Good"
                : "Good"}
            </span>{" "}
            <div className="w-7 max-h-4 bg-blue-600 rounded flex justify-center items-center ml-3 my-auto text-white">
              {hotel.rating * 2}
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between">
          <span>
            {individuals} Individual For {days} Day:
          </span>{" "}
          <span>{hotel.price * individuals * days}$</span>
        </div>
        <Link
          href={`/checkout?location=${destination}&hotel=${hotel.name}&price=${hotel.price}&individuals=${individuals}&days=${days}`}
        >
          <button className="bg-blue-600 h-10 w-40 rounded text-white">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SingleHotel;
