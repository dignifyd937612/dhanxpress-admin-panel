import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const RiskCard = ({ item, data }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-4 transition-all hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-white"
            style={{
              background: item.color,
            }}
          >
            <ArrowDown size={14} />
          </div>

          <div>
            <h3 className="text-[24px] font-semibold leading-none text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              1 - 15 Days
            </p>
          </div>
        </div>

        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gray-100 dark:border-[#333] dark:text-gray-300 dark:hover:bg-[#252525]">
          <ArrowUpRight size={13} />
        </button>
      </div>

      <div>
        <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
          Risk Percentage
        </p>

        <h2 className="text-[32px] font-semibold leading-none text-gray-900 dark:text-white">
          13.62%
        </h2>
      </div>

      <div className="mt-4 h-[70px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={item.color}
              fill={`${item.color}20`}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskCard;
