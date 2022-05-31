import React, { useState } from "react";
import img from "../images/img.jpg";
import CheckoutPage from "../components/CheckoutPage";
import Link from "next/link";
import Image from "next/image";
function HomePage() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="h-fit border p-3">
      <Image width={250} height={200} src={img} />
      <div>
        <h3 className="font-semibold text-xl mt-3 mb-2">
          This is a cool event.
        </h3>
        <p className="font-semibold my-2">$2,000</p>
        <p>Lorem ipsum dolor sit</p>
        <Link href="checkout">
          <a className="block text-center my-3 bg-sky-500 font-semibold w-full p-2">
            APPLY{" "}
          </a>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
