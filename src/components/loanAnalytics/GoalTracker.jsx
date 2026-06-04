"use client";

import { useEffect, useState } from "react";

export default function GoalTracker() {
  const [progress, setProgress] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setProgress([76, 76, 76, 76]);
    }, 300);
  }, []);

  return (
    <div className="rounded-2xl border bg-[#f8f8f8] p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <h3 className="mb-8 text-lg font-semibold dark:text-white">
        Goal Tracker
      </h3>

      <div className="space-y-6">
        {progress.map((item, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm dark:text-white">Monthly Revenue</span>

              <span className="text-sm text-gray-900 dark:text-white">
                {item}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-orange-100">
              <div
                className="h-full rounded-full bg-orange-500 transition-all duration-1000"
                style={{
                  width: `${item}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
