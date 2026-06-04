"use client";

import { tabs } from "@/utils/borrower-profile/tabs";
import { useState } from "react";
import BorrowersDocuments from "./documents/BorrowersDocuments";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Documents");

  return (
    <div className="w-full border-b border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="scrollbar-hide flex w-full items-center justify-between overflow-x-auto border-b border-gray-200 dark:border-[#2a2a2a]">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 whitespace-nowrap px-5 py-4 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>{tab}</span>

                {/* {tab === "Notes" && (
                  <div className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-900 dark:bg-[#252525] dark:text-white">
                    7
                  </div>
                )} */}
              </div>

              <div
                className={`absolute bottom-0 left-1/2 h-[2.5px] -translate-x-1/2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-[70%] bg-black opacity-100 dark:bg-orange-500"
                    : "w-0 opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="py-5">
        {activeTab === "Details" && (
          <div className="text-gray-900 dark:text-white">Details Component</div>
        )}

        {activeTab === "Position" && (
          <div className="text-gray-900 dark:text-white">
            Position Component
          </div>
        )}

        {activeTab === "Documents" && <BorrowersDocuments />}

        {activeTab === "Assessment" && (
          <div className="text-gray-900 dark:text-white">
            Assessment Component
          </div>
        )}

        {activeTab === "Notes" && (
          <div className="text-gray-900 dark:text-white">Notes Component</div>
        )}

        {activeTab === "Task" && (
          <div className="text-gray-900 dark:text-white">Task Component</div>
        )}

        {activeTab === "Email" && (
          <div className="text-gray-900 dark:text-white">Email Component</div>
        )}

        {activeTab === "Calls" && (
          <div className="text-gray-900 dark:text-white">Calls Component</div>
        )}

        {activeTab === "SMS" && (
          <div className="text-gray-900 dark:text-white">SMS Component</div>
        )}
      </div>
    </div>
  );
}
