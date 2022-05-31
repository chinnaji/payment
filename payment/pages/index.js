import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";

import Checkout from "./checkout";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <HomePage />
      {/* <PaymentPage /> */}
      {/* <Checkout /> */}

      {/* <CheckoutPage /> */}
    </main>
  );
}
