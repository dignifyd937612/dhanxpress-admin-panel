export default function TransactionDetails() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h2 className="text-[18px] font-semibold text-gray-900 dark:text-white">
          Transactions Details
        </h2>
      </div>

      <div className="space-y-5 p-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Borrower:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            Rahul Singh
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Loan Type:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            Personal
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Amount:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            ₹1,50,000
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Bank Ref:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            TXN349203
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Mode:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            NEFT
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Date:</span>

          <span className="font-medium text-gray-900 dark:text-white">
            12 Jan 2026
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Status:</span>

          <span className="rounded-md bg-green-600 px-4 py-1 text-xs font-medium text-white">
            Success
          </span>
        </div>

        <button className="mt-3 h-11 w-full rounded-lg bg-[#ff5b5b] text-sm font-medium text-white transition-all hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600">
          Retry Failed Payment
        </button>
      </div>
    </div>
  );
}
