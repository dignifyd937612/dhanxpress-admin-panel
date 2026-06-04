"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function TrendsComparison() {
  const [regions] = useState([
    {
      region: "Europe",
      amount: "₹345,890",
      growth: "+12%",
    },
    {
      region: "Europe",
      amount: "₹345,890",
      growth: "+12%",
    },
    {
      region: "Europe",
      amount: "₹345,890",
      growth: "+12%",
    },
    {
      region: "Europe",
      amount: "₹345,890",
      growth: "+12%",
    },
  ]);

  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-[#f8f8f8] p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Trends & Comparisons
      </h3>

      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        August Overview
      </p>

      <div className="space-y-4">
        {regions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-[#2a2a2a]"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {item.region}
            </span>

            <span className="text-sm text-gray-700 dark:text-gray-300">
              {item.amount}
            </span>

            <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-medium text-green-600 shadow-sm dark:bg-[#252525] dark:text-green-400">
              {item.growth}

              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>

            <button className="flex items-center gap-1 text-xs font-medium text-orange-500 transition-all hover:gap-2 hover:text-orange-600">
              See All
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
