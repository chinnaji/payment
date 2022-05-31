import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

function PaymentPage() {
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");

  const stripe = loadStripe(
    "pk_test_51IGolwJw8HRVezAUgCZptcH3rsJjAsbEwThozBJuTnnTCfiwWzK5He8mA3JMktrFstaK5uBEpoSUYGbMldlhHuNH00TOqkrkn8"
  );
  useEffect(() => {});

  return <div></div>;
}

export default PaymentPage;
