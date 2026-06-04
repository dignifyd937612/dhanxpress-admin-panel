import { FileUp, Scale, UserCog } from "lucide-react";

const SideBarButtons = () => {
  return (
    <div className="col-span-3 border-r border-gray-200 p-4 dark:border-[#2a2a2a]">
      <h2 className="mb-6 text-center text-[20px] font-semibold text-gray-900 dark:text-white">
        Action
      </h2>

      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#f3f3f3] py-3 text-sm text-gray-900 transition-all hover:bg-gray-200 dark:bg-[#252525] dark:text-white dark:hover:bg-[#303030]">
          <UserCog size={16} />
          Assign Field Agent
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#f3f3f3] py-3 text-sm text-gray-900 transition-all hover:bg-gray-200 dark:bg-[#252525] dark:text-white dark:hover:bg-[#303030]">
          <Scale size={16} />
          Escalate To Legal
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#3d3d3d] py-3 text-sm text-white transition-all hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
          <FileUp size={16} />
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default SideBarButtons;
