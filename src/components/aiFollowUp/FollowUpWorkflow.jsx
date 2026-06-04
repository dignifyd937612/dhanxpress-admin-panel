"use client";

import {
  ArrowRight,
  Bell,
  Mail,
  Phone,
  Gavel,
  MessageSquareMore,
  NotebookText,
} from "lucide-react";

const dotColors = {
  green: "bg-green-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  gray: "bg-gray-500",
};

export default function FollowUpWorkflow() {
  const workflow = [
    {
      title: "Whatsapp",
      subtitle: "Reminder",
      day: "Day 1",
      color: "green",
      icon: Bell,
    },
    {
      title: "IVR Auto Call",
      subtitle: "",
      day: "Day 3",
      color: "blue",
      icon: Phone,
    },
    {
      title: "Payment Link + SMS",
      subtitle: "",
      day: "Day 7",
      color: "orange",
      icon: MessageSquareMore,
    },
    {
      title: "Escalation Email",
      subtitle: "",
      day: "Day 15",
      color: "red",
      icon: Mail,
    },
    {
      title: "Legal Warning",
      subtitle: "",
      day: "Day 30",
      color: "red",
      icon: Gavel,
    },
    {
      title: "Legal Recovery Case",
      subtitle: "",
      day: "Day 60",
      color: "gray",
      icon: NotebookText,
    },
  ];

  return (
    <div>
      <h2 className="mb-5 text-[26px] font-semibold text-gray-900 dark:text-white">
        Automated Recovery Workflow
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {workflow.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-center gap-4">
              <div className="min-h-[140px] flex-1 rounded-2xl border border-gray-200 bg-[#f8f8f8] p-4 transition-all hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        item.color === "green"
                          ? "#22c55e"
                          : item.color === "blue"
                            ? "#3b82f6"
                            : item.color === "orange"
                              ? "#f97316"
                              : item.color === "red"
                                ? "#ef4444"
                                : "#6b7280",
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 dark:border-[#333] dark:bg-[#252525] dark:text-gray-300">
                    {item.day}

                    <div
                      className={`h-2 w-2 rounded-full ${dotColors[item.color]}`}
                    />
                  </div>
                </div>

                <h3 className="text-[24px] font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {index !== 2 && index !== 5 && (
                <ArrowRight
                  size={20}
                  className="text-gray-400 dark:text-gray-500"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
