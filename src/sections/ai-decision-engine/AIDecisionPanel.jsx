import AIInsightCard from "../../components/ai-decision-engine/AllInsightCard";
import InfoBanner from "../../components/common/InfoBanner";
import {
  Brain,
  BarChart3,
  Clock3,
  Smile,
  PhoneCall,
  LanguagesIcon,
} from "lucide-react";

export default function AIDecisionPanel() {
  return (
    <>
      <InfoBanner text={"AI Quality Insights - Boosts Collection"} />
      <div className="border border-gray-200 bg-white p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
        <div className="grid grid-cols-2 gap-4">
          <AIInsightCard
            icon={<Brain size={14} className="text-orange-500" />}
            title="Behaviour Analyzer"
            heading="Detects Customer Inspect"
            subHeading='"Will pay soon" tag detected'
            buttons={[
              {
                label: "No Response - Call Later",
              },
              {
                label: "Show Details",
              },
            ]}
          />
          <AIInsightCard
            icon={<BarChart3 size={14} className="text-orange-500" />}
            title="Payment Prediction"
            heading="Likely to pay in 7 days"
            subHeading="For active & stressed accounts"
            badge="65 % Chance"
            badgeColor="orange"
            buttons={[
              {
                label: "Export Insights",
              },
            ]}
            buttonPosition="right"
          />
          <AIInsightCard
            icon={<LanguagesIcon size={14} className="text-orange-500" />}
            title="Language Detector"
            heading="Send Message in Local language"
            subHeading="90% Marathi Intent detected"
            buttons={[
              {
                label: "Offer whatsapp in marathi",
              },
            ]}
          />
          <AIInsightCard
            icon={<Clock3 size={14} className="text-orange-500" />}
            title="Best Contact Time"
            heading="AI Suggests All Timing"
            subHeading="Rahul prefer morning calls"
            buttons={[
              {
                label: "Show Best Time: 9 - 11 AM",
              },
            ]}
            buttonPosition="right"
          />
          <AIInsightCard
            icon={<Smile size={14} className="text-orange-500" />}
            title="Emotion Detection"
            heading="Tone Of Response"
            subHeading="Anger"
          />
          <AIInsightCard
            icon={<PhoneCall size={14} className="text-red-500" />}
            title="Urgent Action"
            heading=""
            buttons={[
              {
                label: "Urgent Field Visit",
                type: "danger",
              },
            ]}
            showEditButton={false}
          />
        </div>
      </div>
    </>
  );
}
