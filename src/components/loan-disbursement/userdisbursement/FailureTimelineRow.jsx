import { MessageSquareMore, MoreHorizontal } from "lucide-react";

export default function FailureTimelineRow() {
  return (
    <div className="flex min-h-[52px] gap-4">
      <div className="flex w-[36px] flex-col items-center self-stretch">
        <div className="flex mt-3 h-6 w-6 items-center justify-center rounded-full bg-orange-400">
          <MessageSquareMore size={12} className="text-white" />
        </div>

        <div className="w-[1px] flex-1 bg-gray-400" />
      </div>

      <div className="mb-3 flex-1 overflow-hidden rounded bg-[#f5f5f5]">
        <div className="border-b px-5 py-3">
          ₹50,000 initiated via IMPS to HDFC Bank - 3421
        </div>

        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-orange-500">
            Failure Reason: Bank Server Delay
          </span>

          <MoreHorizontal size={18} />
        </div>
      </div>
    </div>
  );
}
