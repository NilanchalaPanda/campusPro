"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Pie,
  Line,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Area,
  Scatter,
} from "recharts";

const Graphs = ({ data, data01, data3, data4, data5 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-[50%]">
      {/* Bar and Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-20 h-full">
        {/* Bar Chart */}
        <div className="lg:col-span-7 h-full">
          <ResponsiveContainer className="p-4 shadow-2xl shadow-neutral-600/20 border" height="100%" width="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} className="font-bold" tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip itemStyle={{ fontWeight: 400, color: "#000" }} contentStyle={{ backgroundColor: "#fff" }} />
              <Bar dataKey="pv" fill="#aa44ea" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-3 h-full">
          <ResponsiveContainer className="flex items-center justify-center p-4 shadow-2xl shadow-neutral-600/20 border" width="120%" height="100%">
            <PieChart>
              <Pie data={data} innerRadius={80} outerRadius={120} fill="#aa44ea" paddingAngle={5} dataKey="pv" />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line, Radar, and Composed Charts */}
    
    </div>
  );
};

export default Graphs;
