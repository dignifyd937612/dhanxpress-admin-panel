import { Sparkles } from "lucide-react";

const InfoBanner = ({ text }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200 bg-[#fafafa] px-4 py-3 dark:border-[#2a2a2a] dark:bg-[#252525]">
      <Sparkles size={16} className="text-orange-400" />

      <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  );
};

export default InfoBanner;
