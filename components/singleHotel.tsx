import Image from "next/image";
interface hotelProp {
  hotel: {
    name: string;
    rating: number;
    price: number;
  };
}
const SingleHotel: React.FC<hotelProp> = ({ hotel }) => {
  return (
    <div className="w-full flex my-5">
      <Image width={300} height={300} src={"/hotel.jpg"} alt="" />
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
          <span>2 Individuals For 2 Days:</span> <span>{hotel.price}$</span>
        </div>
        <button className="bg-blue-600 h-10 w-40 rounded text-white">
          see availability
        </button>
      </div>
    </div>
  );
};
export default SingleHotel;
