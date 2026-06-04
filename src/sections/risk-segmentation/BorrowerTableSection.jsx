import DataTable from "@/components/UI/DataTable";

const BorrowerTableSection = () => {
  const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Loan Type", key: "type" },
    { label: "EMI Due", key: "due" },
    { label: "Last Action", key: "action_done" },
    { label: "Risk Percentage", key: "risk_percentage" },
  ];

  const data = [
    {
      id: 101,
      name: "Rahul Singh",
      type: "Personal Loan",
      due: "₹12,500",
      action_done: "SMS Sent",
      risk_percentage: "34%",
    },
  ];

  const filters = [
    {
      filters: ["Loan Type", "Personal Loan", "Education Loan"],
      size: "medium",
      theme: "dark",
    },

    {
      filters: ["City", "Delhi", "Mumbai"],
      size: "medium",
      theme: "dark",
    },

    {
      filters: ["Amount Range", "10k - 50k", "50k - 1L"],
      size: "medium",
      theme: "dark",
    },

    {
      filters: ["Agent", "Rahul", "Aman"],
      size: "medium",
      theme: "dark",
    },
  ];

  return (
    <DataTable
      tableHeading="Borrower List - HIGH RISK"
      columns={columns}
      data={data}
      showSearch
      searchPosition="left"
      filters={filters}
    />
  );
};

export default BorrowerTableSection;
