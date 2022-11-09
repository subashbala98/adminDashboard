/** @format */

import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Jan", uv: 400, pv: 2200, amt: 2900 },
  { name: "Feb", uv: 600, pv: 3400, amt: 3400 },
  { name: "Mar", uv: 200, pv: 4400, amt: 1400 },
  { name: "Apr", uv: 500, pv: 5400, amt: 2300 },
  { name: "May", uv: 700, pv: 2200, amt: 2500 },
  { name: "Jun", uv: 500, pv: 2600, amt: 2600 },
  { name: "Jly", uv: 200, pv: 2800, amt: 2100 },
  { name: "Aug", uv: 100, pv: 2900, amt: 2600 },
  { name: "Sep", uv: 600, pv: 2300, amt: 2700 },
  { name: "Nov", uv: 800, pv: 2100, amt: 2100 },
  { name: "Dec", uv: 900, pv: 3400, amt: 2700 },
];
const Chart = () => {
  return (
    <div>
      <LineChart
        width={1000}
        height={350}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
