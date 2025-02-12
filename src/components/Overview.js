import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency, darkMode }) => {
  return (
    <Card className={`bg-white shadow-lg rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-end">
        <span className="text-xl xl:text-2xl 2xl:text-5xl flex items-center text-primary.DEFAULT">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>
        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
