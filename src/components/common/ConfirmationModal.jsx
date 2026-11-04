"use client";

import { X } from "lucide-react";

export default function ConfirmationModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

        <div className="flex items-center justify-between border-b border-gray-200 bg-[#fafafa] px-6 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Please confirm your action
            </p>
          </div>

          <button
            onClick={() => onClose(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#303030]"
          >
            <X size={18} />
          </button>
        </div>

        <div>{children}</div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 dark:ring-white/5" />
      </div>
    </div>
  );
}
