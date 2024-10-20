import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ChartComponent = ({ data, darkMode }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="value" stroke={darkMode ? "#fff" : "#000"} />
    </LineChart>
  );
};

export default ChartComponent;
