"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DocumentsCard from "./allDocuments/DocumentsCard";

export default function DocumentTabs() {
  const [activeTab, setActiveTab] = useState("All Documents");

  const tabs = ["All Documents", "Portal Milestone"];

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center rounded-xl bg-[#f3f3f3] p-1 dark:bg-[#252525]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-sm dark:bg-[#1a1a1a] dark:text-white"
                    : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-[#4a4a4a] px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
            <Plus size={15} />
            Add Template
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50 dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white dark:hover:bg-[#252525]">
            Download Zip
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50 dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white dark:hover:bg-[#252525]">
            Convert As PDF
          </button>
        </div>
      </div>

      <div className="mt-5">
        {activeTab === "All Documents" && (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <DocumentsCard key={item} />
            ))}
          </div>
        )}

        {activeTab === "Portal Milestone" && (
          <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-[#fafafa] py-20 text-gray-600 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-gray-300">
            Portal Milestone Content
          </div>
        )}
      </div>
    </div>
  );
}
