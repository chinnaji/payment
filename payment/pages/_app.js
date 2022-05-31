import "../styles/globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AYi3k6ubNiSekEZ2CuhelR6kjr2geQsGrlAFblIL2rdEf4mg7SMhYvSKaOEZGPV_bGU4QeAT8X4f2m31",
        "disable-funding": "credit,card,p24",
        currency: "USD",
      }}
    >
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
