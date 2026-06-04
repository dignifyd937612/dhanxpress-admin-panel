"use client";

import { ArrowRight, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

export default function ConnectedCard() {
  const [count, setCount] = useState(20);

  return (
    <div className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-5 transition-all hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Connected
        </h3>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-lg p-2 text-green-500 transition-all hover:bg-green-50 dark:hover:bg-green-500/10"
        >
          <FileSpreadsheet size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:bg-[#252525] dark:text-gray-300">
          +{count}
        </div>

        <button className="flex items-center gap-1 text-xs font-medium text-orange-500 transition-all hover:gap-2 hover:text-orange-600">
          See All
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
