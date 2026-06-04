import SideBarButtons from "@/components/recovery-task/SideBarButtons";
import AiTaskTable from "@/components/recovery-task/AiTaskTable";
import InfoBanner from "@/components/common/InfoBanner";

export default function RecoveryTask() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white dark:bg-[#1a1a1a] dark:border-[#2a2a2a]">
      <InfoBanner
        text={"Auto-updates every 5 min - No manual refresh needed"}
      />
      <div className="grid grid-cols-12">
        <SideBarButtons />
        <AiTaskTable />
      </div>
    </div>
  );
}
