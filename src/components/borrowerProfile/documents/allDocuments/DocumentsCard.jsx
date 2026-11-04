import MoreOptionsDropdown from "@/custom/MoreOptions";
import {
  CircleCheckBig,
  CircleX,
  FileText,
  MoreVerticalIcon,
} from "lucide-react";

const option = [
  {
    key: "edit",
    label: "Edit",
  },
  {
    key: "view",
    label: "View",
  },
  {
    key: "delete",
    label: "Delete",
    danger: true,
  },
];
const DocumentsCard = () => {
  const handleAction = (action) => {
    const actions = {
      edit: () => console.log(action),
      view: () => console.log(action),
      delete: () => console.log(action),
    };

    actions[action]?.();
  };
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10">
          <FileText size={20} className="text-orange-500" />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Copies for voter issued identification
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Voter.png | 12MB | 02 Jan, 2025
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="transition-all hover:scale-110">
          <CircleCheckBig size={22} className="text-green-500" />
        </button>

        <button className="transition-all hover:scale-110">
          <CircleX size={22} className="text-red-500" />
        </button>

        <MoreOptionsDropdown
          options={option}
          onAction={handleAction}
          Icon={MoreVerticalIcon}
          iconSize={16}
        />
        <button className="rounded-lg p-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#252525] dark:hover:text-white"></button>
      </div>
    </div>
  );
};

export default DocumentsCard;
