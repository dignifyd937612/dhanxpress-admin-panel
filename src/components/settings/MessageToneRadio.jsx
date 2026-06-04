"use client";

import { useState } from "react";

const MessageToneRadio = () => {
  const [tone, setTone] = useState("Firm");

  return (
    <div className="flex items-center gap-8 pt-4">
      {["Polite", "Neutral", "Firm"].map((item) => (
        <button
          key={item}
          onClick={() => setTone(item)}
          className="flex items-center gap-2"
        >
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
              tone === item
                ? "border-orange-500"
                : "border-gray-400 dark:border-gray-600"
            }`}
          >
            {tone === item && (
              <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
            )}
          </div>

          <span className="text-sm text-gray-900 dark:text-white">{item}</span>
        </button>
      ))}
    </div>
  );
};

export default MessageToneRadio;
