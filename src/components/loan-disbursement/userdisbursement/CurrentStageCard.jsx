import { Mail, RefreshCcw } from "lucide-react";

export default function DisbursementStatusCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-white dark:bg-[#1a1a1a]">
      <div className="bg-[#f5f5f5] px-6 py-4">
        <p className="text-[14px] font-medium">Current Stage:</p>

        <p className="mt-1 text-[14px]">Disbursement Initiated</p>
      </div>

      <div className="flex flex-1 flex-col px-6 py-5">
        <div className="space-y-4 text-[14px]">
          <div className="flex justify-between">
            <span>Amount to Disburse:</span>
            <span className="font-medium">₹50,000</span>
          </div>

          <div className="flex justify-between">
            <span>Mode:</span>
            <span className="font-medium">IMPS</span>
          </div>

          <div className="flex justify-between">
            <span>Bank:</span>
            <span className="font-medium">HDFC - 3421</span>
          </div>

          <div className="flex justify-between">
            <span>Last Attempt:</span>
            <span className="font-medium">18 Jan 2026</span>
          </div>

          <div className="flex justify-between gap-4">
            <span>Failure Required:</span>

            <span className="text-right text-red-500">Bank Server Delay</span>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button className="mb-3 flex h-10 w-full items-center justify-center gap-2 rounded bg-[#333333] text-sm text-white">
            <RefreshCcw size={14} />
            Retry Disbursement
          </button>

          <button className="flex h-10 w-full items-center justify-center gap-2 rounded bg-[#333333] text-sm text-white">
            <Mail size={14} />
            Notify Customer
          </button>
        </div>
      </div>
    </div>
  );
}
