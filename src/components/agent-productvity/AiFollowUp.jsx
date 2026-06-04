import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
const aiHandleData = [
  {
    name: "AI",
    value: 70,
    color: "#ef4444",
  },
  {
    name: "HUMAN",
    value: 100,
    color: "#2563eb",
  },
];
const AiFollowUp = () => {
  return (
    <>
      <div className="flex h-full items-start justify-between pt-5">
        <div>
          <h2 className="text-[56px] font-semibold leading-none text-orange-400">
            87%
          </h2>

          <p className="mt-4 text-[20px] font-semibold dark:text-white">AI Handles</p>
        </div>
        <BarChart width={140} height={140} data={aiHandleData}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 11,
            }}
          />

          <YAxis hide domain={[0, 120]} />

          <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
            {aiHandleData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default AiFollowUp;
