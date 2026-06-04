"use client";

import RiskCard from "@/components/riskSegmentation/RiskCard";

const data = [
  { value: 20 },
  { value: 15 },
  { value: 10 },
  { value: 18 },
  { value: 22 },
  { value: 25 },
  { value: 30 },
  { value: 28 },
  { value: 35 },
];

export default function RiskCardsSection() {
  const cards = [
    {
      title: "Low Risk",
      color: "#0a8f2d",
    },
    {
      title: "Medium Risk",
      color: "#ff8c00",
    },
    {
      title: "High Risk",
      color: "#ff1f1f",
    },
    {
      title: "Legal Risk",
      color: "#7a7a7a",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((item, index) => (
        <RiskCard key={index} item={item} data={data} />
      ))}
    </div>
  );
}
