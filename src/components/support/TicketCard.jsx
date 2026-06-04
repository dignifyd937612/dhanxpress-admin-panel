"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const TicketCard = ({ id, title, status, tag, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 dark:border-[#2a2a2a]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between px-4 py-4 text-left transition-all"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              #{id}
            </span>

            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span
              className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                color === "green"
                  ? "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400"
                  : color === "orange"
                    ? "bg-orange-100 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400"
                    : "bg-red-100 text-red-500 dark:bg-red-500/15 dark:text-red-400"
              }`}
            >
              ● {status}
            </span>

            <span
              className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                color === "green"
                  ? "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400"
                  : color === "orange"
                    ? "bg-orange-100 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400"
                    : "bg-red-100 text-red-500 dark:bg-red-500/15 dark:text-red-400"
              }`}
            >
              ● {tag}
            </span>
          </div>
        </div>

        <ChevronDown
          size={16}
          className={`mt-1 transition-all duration-300 ${
            open ? "rotate-180" : ""
          } ${
            color === "green"
              ? "text-green-500"
              : color === "orange"
                ? "text-orange-500"
                : "text-red-500"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 px-4 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-xl bg-[#fafafa] p-3 dark:bg-[#252525]">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This ticket is currently under review. Our support team will get
            back soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
