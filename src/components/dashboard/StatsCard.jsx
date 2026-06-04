"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

export default function StatsCard({ title, amount, change, type = "up" }) {
  const isUp = type === "up";

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${isUp ? "bg-orange-100 dark:bg-[#332411]" : "bg-red-100 dark:bg-[#331818]"} `}
        >
          {isUp ? (
            <ArrowUp
              size={18}
              className="text-orange-500 dark:text-orange-400"
            />
          ) : (
            <ArrowDown size={18} className="text-red-500 dark:text-red-400" />
          )}
        </div>

        <div>
          <p
            className={`text-sm font-medium ${isUp ? "text-orange-500 dark:text-orange-400" : "text-red-500 dark:text-red-400"}`}
          >
            {title}
          </p>

          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            ₹ {amount}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-[#252525] dark:text-white">
        <span>{change}</span>

        {isUp ? (
          <ArrowUp size={12} className="text-green-500" />
        ) : (
          <ArrowDown size={12} className="text-red-500" />
        )}
      </div>
    </div>
  );
}
