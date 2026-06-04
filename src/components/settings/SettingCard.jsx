import { AlertCircle } from "lucide-react";

const SettingCard = ({ title, description, children }) => {
  return (
    <div className="overflow-visible border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h3 className="text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-gray-300">
          {title}
        </h3>

        <button className="text-gray-500 transition-all duration-300 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
          <AlertCircle size={18} />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-5 flex items-start justify-between">
          <p className="text-[18px] font-medium text-gray-900 dark:text-white">
            {description}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default SettingCard;
