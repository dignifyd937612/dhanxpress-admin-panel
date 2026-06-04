import FollowUpHeaderSection from "@/sections/ai-follow-up/FollowUpHeaderSection";
import FollowUpManagementSection from "@/sections/ai-follow-up/FollowUpManagementSection";
import WorkflowSection from "@/sections/ai-follow-up/WorkflowSection";

export default function AiFollowUpPage() {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-5">
      <FollowUpHeaderSection />
      <WorkflowSection />
      <FollowUpManagementSection />
    </div>
  );
}
