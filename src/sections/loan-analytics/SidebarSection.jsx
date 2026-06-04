import AIRecommendations from "@/components/loanAnalytics/AIRecommendations";
import ConnectedCard from "@/components/loanAnalytics/ConnectedCard";
import GoalTracker from "@/components/loanAnalytics/GoalTracker";

const SidebarSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <AIRecommendations />
      <ConnectedCard />
      <GoalTracker />
    </div>
  );
};

export default SidebarSection;
