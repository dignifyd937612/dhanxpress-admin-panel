import LegalCard from "@/components/legal-and-escalation/LegarCard";
import { FileText, UserRound, Scale, BadgeDollarSign } from "lucide-react";

const LegalMetricsSection = () => {
  const legalCards = [
    {
      title: "Notice Sent",
      icon: FileText,
      value: "320",
      buttonText: "Bulk Legal Notice",
    },

    {
      title: "Field Visit Done",
      icon: UserRound,
      value: "110",
      buttonText: "Escalate Case",
    },

    {
      title: "Legal Case Filed",

      split: true,

      left: {
        icon: Scale,
        value: "45",
        label: "Legal Case Filed",
      },

      right: {
        icon: BadgeDollarSign,
        value: "87%",
        label: "$74 Lakh",
      },
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 px-5 py-5">
      {legalCards.map((card, index) => (
        <LegalCard key={index} {...card} />
      ))}
    </div>
  );
};

export default LegalMetricsSection;
