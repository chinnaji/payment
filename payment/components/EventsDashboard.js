import React from "react";

function EventsDashboard({ eventsBal, makePayment }) {
  return (
    <div className="w-full lg:w-1/3 border">
      <h1 className="text-black font-semibold text-center py-10 my-10 text-3xl ">
        Events Admin Dashboard
      </h1>
      <div className="text-center px-5">
        {/* <input
        type="number"
        className="block text-black border w-full py-2"
        placeholder="Enter Amount To Be paid"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      /> */}
        <button
          onClick={() => makePayment(100)}
          className="hover:bg-black transition-all ease-linear bg-green-500 p-2 text-white w-fit mx-auto"
        >
          Pay Speaker $100
        </button>

        <p className="text-3xl my-10">
          Account Balance = ${Intl.NumberFormat("en-US").format(eventsBal)}
        </p>
      </div>
    </div>
  );
}

export default EventsDashboard;
