"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MoreHorizontal,
  MessageSquareText,
  Check,
  Building2,
  BadgeDollarSign,
  CircleCheck,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Elenor Pena tagged you in a comment.",
    time: "Today 12:00 PM",
    type: "accepted",
  },
  {
    id: 2,
    title: "Elenor Pena shared deal progress.",
    time: "Today 12:00 PM",
    type: "progress",
  },
  {
    id: 3,
    title: "Elenor Pena tagged you in a comment.",
    time: "Today 04:00 AM",
    type: "comment",
  },
];

export default function BorrowerSidebar() {
  const [activeTab, setActiveTab] = useState("activities");

  return (
    <aside className="flex min-h-screen w-[320px] flex-col border-r border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex flex-col items-center px-6 py-8">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="h-[62px] w-[62px] rounded-full object-cover ring-2 ring-orange-100 dark:ring-[#333]"
        />

        <h3 className="mt-4 text-[18px] font-semibold text-gray-900 dark:text-white">
          Rishabh Rajput
        </h3>

        <p className="mt-1 text-[12px] text-gray-400">Group#15467837</p>

        <div className="mt-6 flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B] text-white transition-all hover:scale-105">
            <Mail size={20} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16A34A] text-white transition-all hover:scale-105">
            <Phone size={20} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#374151] text-white transition-all hover:scale-105 dark:bg-[#252525]">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span className="h-[5px] w-[5px] rounded-full bg-[#22C55E]" />

          <p className="text-[13px] text-gray-600 dark:text-gray-400">
            Last Activity : 2 Nov 2025 at 9:30AM
          </p>
        </div>
      </div>

      <div className="px-6">
        <div className="flex w-full rounded-xl bg-gray-100 p-1 dark:bg-[#252525]">
          <button
            onClick={() => setActiveTab("dealInfo")}
            className={`flex-1 rounded-lg py-3 text-[15px] font-medium transition-all duration-200 ${activeTab === "dealInfo" ? "bg-white text-gray-900 shadow-sm dark:bg-[#1f1f1f] dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
          >
            Deal Info
          </button>

          <button
            onClick={() => setActiveTab("activities")}
            className={`flex-1 rounded-lg py-3 text-[15px] font-medium transition-all duration-200 ${activeTab === "activities" ? "bg-white text-gray-900 shadow-sm dark:bg-[#1f1f1f] dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
          >
            Activities
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {activeTab === "activities" && (
          <div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                {activities.map((activity, index) => (
                  <div key={activity.id} className="flex flex-col items-center">
                    <div
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${activity.type === "progress" ? "border border-dashed border-gray-300 bg-white dark:border-[#444] dark:bg-[#252525]" : "bg-[#FFF4E5] dark:bg-orange-500/10"}`}
                    >
                      {activity.type === "progress" ? (
                        <Check
                          size={16}
                          className="text-gray-900 dark:text-white"
                        />
                      ) : (
                        <MessageSquareText
                          size={16}
                          className="text-[#F59E0B]"
                        />
                      )}
                    </div>

                    {index !== activities.length - 1 && (
                      <div className="h-[92px] w-[1px] bg-gray-300 dark:bg-[#333]" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex-1">
                {activities.map((activity) => (
                  <div key={activity.id} className="min-h-[132px]">
                    <h4 className="text-[15px] font-medium leading-[26px] text-gray-900 dark:text-white">
                      {activity.title}
                    </h4>

                    <p className="mt-2 text-[13px] text-gray-400">
                      {activity.time}
                    </p>

                    {activity.type === "accepted" && (
                      <div className="mt-3 flex items-center gap-2">
                        <CircleCheck size={15} className="text-[#16A34A]" />

                        <span className="text-[14px] text-gray-700 dark:text-gray-300">
                          Accepted
                        </span>
                      </div>
                    )}

                    {activity.type === "progress" && (
                      <div className="mt-4 flex items-center gap-3">
                        <span className="rounded-full bg-[#FDE68A] px-3 py-1 text-[12px] font-medium text-[#92400E] dark:bg-yellow-500/10 dark:text-yellow-400">
                          New
                        </span>

                        <span className="text-gray-500 dark:text-gray-400">
                          →
                        </span>

                        <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-[12px] font-medium text-[#166534] dark:bg-green-500/10 dark:text-green-400">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-wide text-gray-400">
                LOAN REQUESTED
              </p>

              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#252525]">
                  <Building2
                    size={18}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </div>

                <div>
                  <p className="text-[13px] text-gray-400">Loan Purchase</p>

                  <h4 className="mt-1 text-[16px] font-semibold text-gray-900 dark:text-white">
                    New Purchase
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#252525]">
                  <BadgeDollarSign
                    size={18}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </div>

                <div>
                  <p className="text-[13px] text-gray-400">Loan Amount</p>

                  <h4 className="mt-1 text-[16px] font-semibold text-gray-900 dark:text-white">
                    NZ24,50,000
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "dealInfo" && (
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500 dark:border-[#333] dark:text-gray-400">
            Deal Information Coming Soon
          </div>
        )}
      </div>
    </aside>
  );
}
