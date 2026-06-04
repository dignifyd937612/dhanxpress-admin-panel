import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer as ChartContainer,
} from "recharts";

const recoveryData = [
  { day: "Mon", value: 72 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 74 },
  { day: "Thu", value: 58 },
  { day: "Fri", value: 80 },
];

const AgentRecTime = () => {
  return (
    <>
      <div className="flex h-full flex-col">
        <div className="h-[140px]">
          <ChartContainer width="100%" height="100%">
            <AreaChart
              data={recoveryData}
              margin={{
                top: 10,
                right: 0,
                left: -25,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e5e7eb"
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#6b7280",
                }}
                ticks={[20, 60, 90]}
                tickFormatter={(value) => `₹${value}k`}
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#111827",
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#7ed7c6"
                fill="transparent"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>

        <div className="mt-auto border-t pt-3">
          <h2 className="text-[25px] font-semibold text-blue-500">11 Days</h2>
        </div>
      </div>
    </>
  );
};

export default AgentRecTime;
