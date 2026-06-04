import AgentRecTime from "@/components/agent-productvity/AgentRecTime";
import AiFollowUp from "@/components/agent-productvity/AiFollowUp";
import AnalyticsCard from "@/components/agent-productvity/AnalyticsCard";
import GaugeMeter from "@/components/agent-productvity/GaugeMeter";
import { Gauge } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      title: "Agent Efficiency Score",
      buttonText: "Efficient Follow - Ups",
      buttonColor: "red",
      buttonIcon: <Gauge size={14} />,
      content: <GaugeMeter />,
    },

    {
      title: "Agent Recovery Time",
      buttonText: "Average days collect payment",
      buttonColor: "dark",
      content: <AgentRecTime />,
    },

    {
      title: "Follow- Ups done by AI",
      buttonText: "Only 13% Human Interventions",
      buttonColor: "dark",
      content: <AiFollowUp />,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {metrics.map((item, index) => (
        <AnalyticsCard
          key={index}
          title={item.title}
          buttonText={item.buttonText}
          buttonColor={item.buttonColor}
          buttonIcon={item.buttonIcon}
        >
          {item.content}
        </AnalyticsCard>
      ))}
    </div>
  );
};

export default MetricsSection;
