import { Check, Plus, Minus, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Total Approved Loans",
    value: "482",
    icon: Check,
    color: "bg-blue-500",
  },

  {
    title: "Total Amount Disbursed",
    value: "₹9.6 Cr",
    icon: Plus,
    color: "bg-blue-500",
  },

  {
    title: "Pending Disbursement",
    value: "74",
    icon: Minus,
    color: "bg-orange-500",
  },

  {
    title: "Failed Transactions",
    value: "6",
    icon: AlertCircle,
    color: "bg-red-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${item.color}`}
                >
                  <Icon size={14} />
                </div>

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h2 className="text-[32px] font-semibold text-gray-900 dark:text-white">
                {item.value}
              </h2>

              <div className="flex items-center gap-1 rounded-full bg-[#f5f5f5] px-2 py-1 text-[10px] font-medium text-gray-700 dark:bg-[#252525] dark:text-gray-300">
                +12%
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
