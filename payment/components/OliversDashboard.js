import React from "react";

function OliversDashboard({ companiesBal }) {
  return (
    <div className="w-full lg:w-1/3 border">
      <h1 className="text-black font-semibold text-center py-10 my-10 text-3xl ">
        Mr Olivers Dashboard
      </h1>
      <p className="text-3xl my-10 text-center">
        Account Balance = ${companiesBal}
      </p>
    </div>
  );
}

export default OliversDashboard;
