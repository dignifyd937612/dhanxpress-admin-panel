"use client";

import { Edit, RotateCcw, Save } from "lucide-react";

export default function FollowUpRules() {
  const rules = [
    ["Day 1", "Friendly Whatsapp Reminder"],
    ["Day 3", "IVR Auto Call"],
    ["Day 7", "Payment Link + SMS"],
    ["Day 15", "Escalation Email"],
    ["Day 30", "Legal Warning Template"],
    ["Day 45", "Assign Field Agent"],
    ["Day 60", "Case Marked for Legal Recovery"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#f8f8f8] dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 p-4 dark:border-[#2a2a2a]">
        <h2 className="text-[22px] font-semibold text-gray-900 dark:text-white">
          Follow-Up Rule Settings
        </h2>
      </div>

      <div>
        {rules.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-gray-200 px-4 py-3 text-sm dark:border-[#2a2a2a]"
          >
            <p className="font-medium text-gray-900 dark:text-white">
              {item[0]}
            </p>

            <p className="col-span-2 text-gray-600 dark:text-gray-300">
              {item[1]}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4">
        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 dark:border-[#333] dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-[#2f2f2f]">
          <Save size={14} />
          Save Rules
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 dark:border-[#333] dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-[#2f2f2f]">
          <RotateCcw size={14} />
          Reset
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 dark:border-[#333] dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-[#2f2f2f]">
          <Edit size={14} />
          Edit
        </button>
      </div>
    </div>
  );
}
