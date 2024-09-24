import Image from "next/image";
import { FunctionComponent } from "react";
type props = {
  image: string;
  name: string;
  price: number;
};
const TourCard: FunctionComponent<props> = ({ image, name, price }) => {
  console.log(price);

  return (
    <div className=" w-full flex flex-col justify-between rounded-md min-h-[521px]">
      <Image
        width={200}
        height={200}
        src={image}
        alt=""
        className="w-full rounded-md"
      />
      <div>
        <div className="w-full flex justify-between mt-5 mb-10">
          <span className="font-semibold text-[24px]">{name}</span>
          <div className="text-[24px]">${price}.00/day</div>
        </div>
        <p className="text-[14px] font-medium">
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore incididunt ut labore et dolore
        </p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-[30%] flex justify-between ">
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
        <button className="w-40 rounded-xl bg-black text-white">
          Booking Now
        </button>
      </div>
    </div>
  );
};
export default TourCard;
