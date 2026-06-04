"use client";

import InfoBanner from "@/components/common/InfoBanner";
import ActionSection from "@/sections/agent-productvity/ActionSection";
import MetricsSection from "@/sections/agent-productvity/MetricsSection";

export default function AgentProductivity() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white dark:bg-[#1a1a1a] dark:border-[#2a2a2a]">
      <InfoBanner text="Insightful Metrics to Improve Performance" />
      <MetricsSection />
      <InfoBanner text="Insightful Metrics to Improve Performance" />
      <ActionSection />
    </div>
  );
}
