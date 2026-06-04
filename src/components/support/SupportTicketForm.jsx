"use client";

import CustomDropDown from "@/custom/CustomDropDown";
import { Upload } from "lucide-react";
import { useState } from "react";

const SupportTicketForm = () => {
  const [priority, setPriority] = useState("High");

  return (
    <div className="space-y-5 p-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Subject
        </label>

        <CustomDropDown
          filters={["Payment Issue", "Technical Error", "Account Access"]}
          size="large"
          theme={"dark"}
          hideFirstOption={false}
          fullWidth
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Messages
        </label>

        <textarea
          placeholder="Please describe your problems here"
          rows={5}
          className="w-full rounded-xl border border-gray-200 bg-[#fafafa] p-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-orange-500 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white dark:placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Attachment
        </label>

        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#3f3f3f] text-sm text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
          <Upload size={16} />
          Upload File
        </button>
      </div>

      <div>
        <label className="mb-4 block text-sm font-medium text-gray-900 dark:text-white">
          Priority :
        </label>

        <div className="flex items-center gap-6">
          {["Low", "Medium", "High"].map((item) => (
            <button
              key={item}
              onClick={() => setPriority(item)}
              className="flex items-center gap-2"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${priority === item ? "border-orange-500" : "border-gray-400 dark:border-gray-600"}`}
              >
                {priority === item && (
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${item === "High" ? "bg-red-500" : item === "Medium" ? "bg-orange-400" : "bg-green-500"}`}
                  />
                )}
              </div>

              <span className="text-sm text-gray-900 dark:text-white">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button className="h-12 w-full rounded-lg bg-[#3f3f3f] text-sm font-medium text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
        Submit Ticket
      </button>
    </div>
  );
};

export default SupportTicketForm;
