import { MessageSquareMore, MoreHorizontal } from "lucide-react";

export default function FailureTimelineRow() {
  return (
    <div className="flex min-h-[52px] gap-4">
      <div className="flex w-[36px] flex-col items-center self-stretch">
        <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-400">
          <MessageSquareMore size={12} className="text-white" />
        </div>

        <div className="w-[1px] flex-1 bg-gray-300 dark:bg-[#3a3a3a]" />
      </div>

      <div className="mb-3 flex-1 overflow-hidden rounded-lg bg-[#f5f5f5] dark:bg-[#252525] border border-transparent dark:border-[#2a2a2a]">
        <div className="border-b border-gray-200 px-5 py-3 text-gray-900 dark:border-[#2a2a2a] dark:text-white">
          ₹50,000 initiated via IMPS to HDFC Bank - 3421
        </div>

        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-orange-500">
            Failure Reason: Bank Server Delay
          </span>

          <button className="rounded-full p-1 transition-all hover:bg-white dark:hover:bg-[#303030]">
            <MoreHorizontal
              size={18}
              className="text-gray-700 dark:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
