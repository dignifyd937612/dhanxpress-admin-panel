import CustomDropDown from "@/custom/CustomDropDown";

export default function DisbursementFilters() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h2 className="text-[18px] font-semibold text-gray-900 dark:text-white">
          Filter Disbursement
        </h2>
      </div>

      <div className="space-y-5 p-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Subject
          </label>

          <CustomDropDown
            filters={["Payment Issue", "Loan Issue", "Technical"]}
            theme="dark"
            size="large"
            hideFirstOption={false}
            fullWidth={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Status
          </label>

          <CustomDropDown
            filters={["Pending", "Success", "Failed"]}
            theme="dark"
            size="large"
            hideFirstOption={false}
            fullWidth={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Bank
          </label>

          <CustomDropDown
            filters={["All", "HDFC", "SBI"]}
            theme="dark"
            size="large"
            hideFirstOption={false}
            fullWidth={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Date
          </label>

          <CustomDropDown
            filters={["Jan 2026", "Feb 2026"]}
            theme="dark"
            size="large"
            fullWidth={true}
            hideFirstOption={false}
          />
        </div>

        <button className="h-11 w-full rounded-lg bg-[#4a4a4a] text-sm font-medium text-white transition-all hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
