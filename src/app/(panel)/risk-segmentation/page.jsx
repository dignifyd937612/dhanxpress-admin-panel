import BorrowerTableSection from "@/sections/risk-segmentation/BorrowerTableSection";
import RiskCardsSection from "@/sections/risk-segmentation/RiskCardsSection";
import RiskSummarySection from "@/sections/risk-segmentation/RiskSummarySection";


export default function RiskSegmentationPage() {
  return (
    <div className="p-5 flex flex-col gap-5 bg-white dark:bg-[#1a1a1a]">
      <RiskSummarySection />
      <RiskCardsSection />
      <BorrowerTableSection />
    </div>
  );
}
