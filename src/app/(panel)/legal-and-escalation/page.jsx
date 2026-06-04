"use client";

import InfoBanner from "@/components/common/InfoBanner";
import LegalActionsSection from "@/sections/legal-and-escalation/LegalActionsSection";
import LegalMetricsSection from "@/sections/legal-and-escalation/LegalMetricsSection";

export default function LegalEscalationModule() {
  return (
    <>
      <InfoBanner text="Streamlined Metrics to Improve Performance" />
      <div className="border bg-white dark:bg-[#1a1a1a] dark:border-[#2a2a2a]">
        <LegalMetricsSection />
        <InfoBanner text="Track Escalations and Recoveries in one module" />
        <LegalActionsSection />
      </div>
    </>
  );
}
