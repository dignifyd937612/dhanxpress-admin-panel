import RealTimeActivity from "@/components/loanAnalytics/RealTimeActivity";
import TrendsComparison from "@/components/loanAnalytics/TrendsComparison";


const ActivitySection = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <RealTimeActivity />
      <TrendsComparison />
    </div>
  );
};

export default ActivitySection;
