import React from "react";

function SpeakersDashboard({ speakersBal }) {
  return (
    <div className="w-full lg:w-1/3 border ">
      <h1 className="text-black font-semibold text-center py-10 my-10 text-3xl ">
        Speakers Dashboard
      </h1>
      <p className="text-3xl my-10 text-center">
        Account Balance = ${speakersBal}
      </p>
    </div>
  );
}

export default SpeakersDashboard;
