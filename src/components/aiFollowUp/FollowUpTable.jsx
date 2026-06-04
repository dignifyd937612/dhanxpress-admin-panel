"use client";

import DataTable from "@/components/UI/DataTable";

const columns = [
  {
    label: "Name",
    key: "name",
  },

  {
    label: "Risk",
    key: "risk",
  },

  {
    label: "Days Late",
    key: "days",
  },

  {
    label: "Current Step",
    key: "step",
  },

  {
    label: "Next Action",
    key: "next",
  },
];

const data = [
  {
    name: "Rahul Singh",
    risk: "High",
    days: "58 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },

  {
    name: "Neha Gaur",
    risk: "Medium",
    days: "18 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },

  {
    name: "Simran Shah",
    risk: "Legal",
    days: "32 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },

  {
    name: "Romit Singh",
    risk: "High",
    days: "22 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },
  {
    name: "Simran Shah",
    risk: "Legal",
    days: "32 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },

  {
    name: "Romit Singh",
    risk: "High",
    days: "22 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },
  {
    name: "Simran Shah",
    risk: "Legal",
    days: "32 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },

  {
    name: "Romit Singh",
    risk: "High",
    days: "22 Days",
    step: "SMS Sent",
    next: "Escalation Email",
  },
];

export default function FollowUpTable() {
  return (
    <DataTable
      tableHeading="Today’s AI Follow-Ups"
      columns={columns}
      data={data}
      showSearch={true}
      searchPosition="right"
      showRowsPerPage={true}
    />
  );
}
