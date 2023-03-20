// These are the codes from Recharts
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

// import "./styles.css";

const data = [
  {
    name: "Page A",
    uv: 4000
  },
  {
    name: "Page B",
    uv: 3000
  },
  {
    name: "Page C",
    uv: 2000
  },
  {
    name: "Page D",
    uv: 2780
  },
  {
    name: "Page E",
    uv: 1890
  },
  {
    name: "Page F",
    uv: 2390
  },
  {
    name: "Page G",
    uv: 3490
  }
];

const CustomToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className={"Custom-Tooltip bg-white p-3"}>
        <p>{label}</p>
        {payload[0].dataKey + ": " + payload[0].value}
      </div>
    );
  }
  return null;
};

export function CustomBarCharts() {
  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      onMouseMove={(state) => {
        if (state.isTooltipActive) {
          setFocusBar(state.activeTooltipIndex);
          setMouseLeave(false);
        } else {
          setFocusBar(null);
          setMouseLeave(true);
        }
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip cursor={false} content={<CustomToolTip />} />
      {/* <Legend /> */}
      <Bar dataKey="uv" fill="#2B5CE7">
        {data.map((entry, index) => (
          <Cell
            fill={
              focusBar === index || mouseLeave
                ? "#2B5CE7"
                : "rgba(43, 92, 231, 0.2)"
            }
          />
        ))}
      </Bar>
    </BarChart>
  );
}

;
