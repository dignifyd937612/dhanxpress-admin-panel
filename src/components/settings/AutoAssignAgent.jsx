"use client";

import { useState } from "react";

const AutoAssignAgent = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between rounded-lg bg-[#fafafa] p-4 dark:bg-[#252525]">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
          enabled ? "bg-orange-500" : "bg-gray-300 dark:bg-[#3a3a3a]"
        }`}
      >
        <div
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300 dark:bg-[#1a1a1a] ${
            enabled ? "left-8" : "left-1"
          }`}
        />
      </button>

      <button
        className={`rounded-md px-6 py-2 text-sm font-medium text-white transition-all duration-300 ${
          enabled
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-[#7a7a7a] hover:bg-[#666] dark:bg-[#3a3a3a] dark:hover:bg-[#4a4a4a]"
        }`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </button>
    </div>
  );
};

export default AutoAssignAgent;
