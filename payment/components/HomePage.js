import React, { useState } from "react";
import EventsDashboard from "./EventsDashboard";
import OliversDashboard from "./OliversDashboard";
import SpeakersDashboard from "./SpeakersDashboard";

function HomePage() {
  const [amount, setAmount] = useState(0);
  const [eventsBal, setEventsBal] = useState(10000);
  const [companiesBal, setCompaniesBal] = useState(0);
  const [speakersBal, setSpeakersBal] = useState(0);
  const makePayment = (amount) => {
    const companiesFees = 0.1 * amount;
    const speakersFees = amount - companiesFees;
    setEventsBal((prevState) => prevState - amount);
    setCompaniesBal((prevState) => +prevState + companiesFees);
    setSpeakersBal((prevState) => +prevState + speakersFees);
  };
  return (
    <>
      <section className="flex flex-wrap mt-16">
        {/* speakers Dashboard */}
        <SpeakersDashboard speakersBal={speakersBal} />

        {/* events admin dashboard */}
        <EventsDashboard eventsBal={eventsBal} makePayment={makePayment} />
        {/* <Events eventsBal={eventsBal}  makePayment={makePayment} /> */}

        {/* mr olivers dashboard */}
        <OliversDashboard companiesBal={companiesBal} />
      </section>
    </>
  );
}

export default HomePage;
