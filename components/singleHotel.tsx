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
}
const SingleHotel: React.FC<hotelProp> = ({ hotel, individuals, days }) => {
  return (
    <div className="w-full flex my-5">
      <Image width={300} height={300} src={hotel.image} alt="" />
      <div className="w-[70%] flex justify-between items-end flex-col p-3">
        <div className=" w-full flex justify-between">
          <span>Hotel: {hotel.name}</span>{" "}
          <div className="flex">
            <span>
              {hotel.rating * 2 > 9
                ? "Excellent"
                : hotel.rating * 2 > 8
                ? "Very Good"
                : "Good"}
            </span>{" "}
            <div className="w-7 h-5 bg-blue-600 rounded flex justify-center items-center ml-3 text-white">
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
          href={`/checkout?hotel=${hotel.name}&price=${hotel.price}&individuals=${individuals}&days=${days}`}
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
