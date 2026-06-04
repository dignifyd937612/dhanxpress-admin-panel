import DashboardAssistantSection from "@/sections/dashbaord/DashboardAssistantSection";
import DashboardOverviewSection from "@/sections/dashbaord/DashboardOverviewSection";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <DashboardOverviewSection />
      <DashboardAssistantSection />
    </div>
  );
}
