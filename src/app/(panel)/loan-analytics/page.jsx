import ActivitySection from "@/sections/loan-analytics/ActivitySection";
import AnalyticsSection from "@/sections/loan-analytics/AnalyticsSection";
import OverviewSection from "@/sections/loan-analytics/OverviewSection";
import SidebarSection from "@/sections/loan-analytics/SidebarSection";

export default function LoanAnalyticsPage() {
  return (
    <div className="rounded-2xl bg-white p-5 dark:bg-[#1a1a1a]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 flex flex-col gap-4">
          <OverviewSection />
          <AnalyticsSection />
          <ActivitySection />
        </div>

        <div className="col-span-4">
          <SidebarSection />
        </div>
      </div>
    </div>
  );
}
