"use client";

import {
  CircleDollarSign,
  TrendingUp,
  BadgeDollarSign,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function Stats() {
  const stats = [
    {
      title: "Total Recovery",
      amount: "₹24,569.00",
      percentage: 12,
      icon: CircleDollarSign,
      status: "success",
    },
    {
      title: "Growth Percentage",
      amount: "₹24,569.00",
      percentage: 12,
      icon: TrendingUp,
      status: "success",
    },
    {
      title: "Cost Savings",
      amount: "₹24,569.00",
      percentage: 12,
      icon: BadgeDollarSign,
      status: "danger",
    },
    {
      title: "Customer Retention",
      amount: "₹24,569.00",
      percentage: 12,
      icon: Users,
      status: "success",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <StatCard
          key={index}
          title={item.title}
          amount={item.amount}
          percentage={item.percentage}
          icon={item.icon}
          status={item.status}
        />
      ))}
    </div>
  );
}
