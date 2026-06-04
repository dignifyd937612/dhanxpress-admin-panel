"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  amount,
  percentage,
  icon: Icon,
  status = "success",
}) {
  const handleCardClick = () => {
    console.log(`${title} clicked`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer rounded-2xl border border-gray-200 bg-[#f8f8f8] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-all group-hover:scale-110 dark:bg-[#252525] dark:text-white">
            <Icon size={15} />
          </div>

          <span className="truncate text-[11px] text-gray-700 dark:text-gray-300">
            {title}
          </span>
        </div>

        <ArrowUpRight
          size={14}
          className="shrink-0 text-gray-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500 dark:text-gray-400"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="truncate text-[24px] font-semibold text-gray-900 dark:text-white">
          {amount}
        </h3>

        <div className="flex shrink-0 items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] shadow-sm dark:bg-[#252525] dark:text-gray-300">
          <span>{percentage}%</span>

          <span
            className={`h-2 w-2 rounded-full ${status === "success" ? "bg-green-500" : "bg-red-500"}`}
          />
        </div>
      </div>
    </div>
  );
}
