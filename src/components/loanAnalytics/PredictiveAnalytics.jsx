"use client";

import CustomDropDown from "@/custom/CustomDropDown";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PredictiveAnalytics() {
  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 38 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 32 },
    { month: "May", value: 26 },
    { month: "Jun", value: 44 },
    { month: "Jul", value: 33 },
    { month: "Aug", value: 52 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 58 },
    { month: "Nov", value: 64 },
    { month: "Dec", value: 70 },
  ];

  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-5 border dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg dark:text-white">Predictive Analytics</h3>

          <p className="text-sm text-gray-900 dark:text-white">
            From January - December 2025
          </p>
        </div>

        <CustomDropDown
          filters={["Monthly", "Weekly", "Yearly"]}
          hideFirstOption={false}
        />
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#d1d5db"
              vertical={true}
            />

            <XAxis
              dataKey="month"
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 12,
                fill: "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={3}
              fill="url(#colorGradient)"
              activeDot={{
                r: 6,
                fill: "#f97316",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
