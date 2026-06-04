"use client";

import DataTable from "../UI/DataTable";
import { loanOverviewColumns } from "@/utils/tableColumns/loanOverviewColumns";

export const loanOverviewData = [
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 1,
    date: "Jan 25",
    name: "Kripa",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Success",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
  {
    id: 2,
    date: "Jan 25",
    name: "Shreya",
    amount: "₹56,67.00",
    category: "Personal Loan",
    status: "Failed",
    overdueAmount: "₹456,67.00",
    followUp: "12th Dec",
  },
];

export default function LoanOverview() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <DataTable
        tableHeading="AI Loan Overview"
        subHeading="AI Table for overview of loan"
        propsColumn={loanOverviewColumns}
        propsData={loanOverviewData}
        actions={{
          viewLoan: (row) => {
            console.log(row);
          },
        }}
        showSearch
        hideFirstOption={false}
        filters={[
          {
            filters: ["All", "Last 7 Days", "Last 30 Days"],
            size: "medium",
            theme: "dark",
          },
        ]}
      />
    </div>
  );
}
