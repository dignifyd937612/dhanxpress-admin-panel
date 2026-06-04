import { Settings } from "lucide-react";

const FollowUpHeaderSection = () => {
  const summary = {
    activeCases: "1,240",
  };

  return (
    <div className="mb-6 flex items-center justify-end border-b border-gray-200 pb-4 dark:border-[#2a2a2a]">
      <div className="flex items-center gap-5">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Active Cases :
          <span className="ml-1 font-semibold text-gray-900 dark:text-white">
            {summary.activeCases}
          </span>
        </p>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 dark:border-[#333] dark:text-gray-300 dark:hover:bg-[#252525] dark:hover:text-white">
          <Settings size={18} />
        </button>
      </div>
    </div>
  );
};

export default FollowUpHeaderSection;
