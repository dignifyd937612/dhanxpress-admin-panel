import { Mail, RefreshCcw } from "lucide-react";

export default function DisbursementStatusCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="bg-[#f5f5f5] px-6 py-4 dark:bg-[#252525]">
        <p className="text-[14px] font-medium text-gray-900 dark:text-white">
          Current Stage:
        </p>

        <p className="mt-1 text-[14px] text-gray-700 dark:text-gray-300">
          Disbursement Initiated
        </p>
      </div>

      <div className="flex flex-1 flex-col px-6 py-5">
        <div className="space-y-4 text-[14px]">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              Amount to Disburse:
            </span>

            <span className="font-medium text-gray-900 dark:text-white">
              ₹50,000
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Mode:</span>

            <span className="font-medium text-gray-900 dark:text-white">
              IMPS
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Bank:</span>

            <span className="font-medium text-gray-900 dark:text-white">
              HDFC - 3421
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              Last Attempt:
            </span>

            <span className="font-medium text-gray-900 dark:text-white">
              18 Jan 2026
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-gray-600 dark:text-gray-400">
              Failure Required:
            </span>

            <span className="text-right text-red-500 dark:text-red-400">
              Bank Server Delay
            </span>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button className="mb-3 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#333333] text-sm text-white transition-all duration-300 hover:bg-black dark:bg-[#252525] dark:bg-orange-500 dark:hover:bg-orange-600">
            <RefreshCcw size={14} />
            Retry Disbursement
          </button>

          <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#333333] text-sm text-white transition-all duration-300 hover:bg-black dark:bg-[#252525] dark:bg-orange-500 dark:hover:bg-orange-600">
            <Mail size={14} />
            Notify Customer
          </button>
        </div>
      </div>
    </div>
  );
}
