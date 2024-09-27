import React, { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

export default function PaymentSuccess() {
  const router = useRouter();
  const { query } = router;
  const location = query.location;
  const hotel = query.hotel;
  const price = query.total;
  const individuals = query.individuals;
  const days = query.days;
  const clientName = query.name;
  const clientEmail = query.email;
  const clientPhone = query.phone;
  function sendTicketandBookStay() {
    axios
      .post(`https://silly-funny-lint.glitch.me/api/stay`, {
        location: location,
        hotel: hotel,
        price: price,
        individuals: individuals,
        days: days,
        clientName: clientName,
        clientEmail: clientEmail,
        clientNumber: clientPhone,
      })
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 z-40">
      <div className="bg-white border border-green-200 shadow-lg p-12 w-full max-w-lg h-auto">
        <h1 className="mb-4 text-green-400 text-center text-4xl font-eb-garamond">
          Payment Succeeded!
        </h1>
        <p className="mb-6 text-xl text-green-400 text-center font-eb-garamond">
          Thank you for your purchase. Your payment was successful.
        </p>
        <Link href={"/"}>
          <button
            onClick={() => {
              sendTicketandBookStay();
            }}
            className="mt-4 w-full text-green-400 font-eb-garamond text-lg border border-green-300"
          >
            Press Here To Receive Confirmation Email
          </button>
        </Link>
      </div>
    </div>
  );
}
