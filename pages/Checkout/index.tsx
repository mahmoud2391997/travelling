import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { query } = router;
  const hotel = query.hotel;
  const location = query.location;
  const price = query.price;
  const individuals = query.individuals;
  const days = query.days;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function getTotal(price: number, days: number, individuals: number) {
    return price * days * individuals;
  }
  function stripePayment() {
    axios
      .post(`https://silly-funny-lint.glitch.me/api/create-checkout-session`, {
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        location: location,
        days: days,
        individuals: individuals,
        hotel: hotel,
        stay: `${days} day for ${individuals} person in ${hotel} `,
        total: getTotal(
          price ? +price : 0,
          days ? +days : 0,
          individuals ? +individuals : 0
        ),
      })
      .then((response) => (window.location.href = response.data))

      .catch((error) => {
        throw error;
      });
  }
  return (
    <form
      className="py-36"
      onSubmit={(e) => {
        e.preventDefault();
        stripePayment();
      }}
    >
      <h2 className="m-auto my-10 racking-wider text-3xl font-thin w-[35%] text-start">
        BILLING DETAILS
      </h2>
      <div className=" h-[90vh]  m-auto lg:w-[35%] w-[90%]">
        <div className="h-[30%] justify-between flex flex-col">
          <div className="flex flex-col ">
            <label htmlFor="">Full Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-b-2 border-slate-500"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-b-2 border-slate-500"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Phone</label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="border-b-2 border-slate-500"
              type="text"
              required
            />
          </div>
        </div>
        <h2 className="m-auto my-10 racking-wider text-3xl font-thin w-[100%] mt-20 text-start">
          YOUR STAY
        </h2>

        <table className="w-[100%] h-80 text-lg m-auto table">
          <tbody className="h-full ">
            <tr className="border-b-1 border-black">
              <td>Hotel Name</td>
              <td>{hotel}</td>
            </tr>

            <tr className="border-b-1 border-black">
              <td>Price For Individual Per Day</td>
              <td>{price}$</td>
            </tr>
            <tr className="border-b-1 border-black">
              <td>Number Of Individuals</td>
              <td>{individuals}</td>
            </tr>
            <tr className="border-b-1 border-black">
              <td>Number Of Days</td>
              <td>{days}</td>
            </tr>
            <tr className="border-b-1 border-black">
              <td>Total</td>
              <td>
                {getTotal(
                  price ? +price : 0,
                  days ? +days : 0,
                  individuals ? +individuals : 0
                )}
                $
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="button home  border-[#120B0B] border-2 w-52 h-12 text-black mt-10 mb-20 m-auto"
          id="home"
          type="submit"
        >
          BOOK AND PAY WITH STRIPE
        </button>
      </div>
    </form>
  );
}
