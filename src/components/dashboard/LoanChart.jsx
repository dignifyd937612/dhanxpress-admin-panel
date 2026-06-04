"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 40000 },
  { day: "Tue", value: 32000 },
  { day: "Wed", value: 60000 },
  { day: "Thu", value: 50000 },
  { day: "Fri", value: 70000 },
  { day: "Sat", value: 75000 },
];

export default function TotalLoanCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Total Loan
      </h2>

      <h3 className="text-2xl font-bold text-orange-500">₹ 824,676.00</h3>

      <div className="mb-4 mt-2 flex items-center gap-2">
        <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-400">
          ↑ 8%
        </span>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          Compared to last month
        </span>
      </div>

      <div className="h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="var(--grid-color)"
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 12,
                fill:
                  typeof window !== "undefined" &&
                  document.documentElement.classList.contains("dark")
                    ? "#9ca3af"
                    : "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[20000, 90000]}
              ticks={[20000, 60000, 90000]}
              tickFormatter={(v) => `₹${v / 1000}k`}
              tick={{
                fontSize: 12,
                fill:
                  typeof window !== "undefined" &&
                  document.documentElement.classList.contains("dark")
                    ? "#9ca3af"
                    : "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#f97316"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#f97316",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
                fill: "#f97316",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <style jsx>{`
        :global(:root) {
          --grid-color: #e5e7eb;
        }

        :global(.dark) {
          --grid-color: #2a2a2a;
        }
      `}</style>
    </div>
  );
}
