import { Plus } from "lucide-react";
import SearchInput from "../UI/SearchInput";

export default function Header() {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 bg-white px-8 py-6 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div>
        <h1 className="text-[34px] font-semibold leading-none text-gray-900 dark:text-white">
          Property Loan
        </h1>

        <div className="mt-5 flex items-center gap-5">
          <p className="text-[15px] text-gray-500 dark:text-gray-400">
            Created On:{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              2 Mar, 2025
            </span>
          </p>

          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt=""
              className="h-9 w-9 rounded-full border-2 border-white object-cover dark:border-[#1a1a1a]"
            />

            <img
              src="https://i.pravatar.cc/40?img=2"
              alt=""
              className="-ml-2 h-9 w-9 rounded-full border-2 border-white object-cover dark:border-[#1a1a1a]"
            />

            <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#F59E0B] text-[12px] font-semibold text-white dark:border-[#1a1a1a]">
              +2
            </div>
          </div>

          <button className="flex h-11 items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 text-[14px] font-medium text-gray-900 transition-all hover:bg-gray-100 dark:border-[#333] dark:bg-[#252525] dark:text-white dark:hover:bg-[#2f2f2f]">
            <Plus size={16} />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      <div className="relative">
        <SearchInput />
      </div>
    </div>
  );
}
