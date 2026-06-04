import DataTable from "@/components/UI/DataTable";

export default function DisbursementHistory() {
  const columns = [
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
    { label: "Mode", key: "mode" },
    { label: "Bank Ref", key: "bankRef" },
    { label: "Status", key: "status" },
  ];

  const data = [
    {
      date: "12 Jan 2026",
      amount: "₹50,000",
      mode: "NEFT",
      bankRef: "TXN20901",
      status: "Success",
    },

    {
      date: "15 Jan 2026",
      amount: "₹57,000",
      mode: "NEFT",
      bankRef: "TXN20902",
      status: "Failed",
    },

    {
      date: "20 Jan 2026",
      amount: "₹30,000",
      mode: "NEFT",
      bankRef: "TXN20903",
      status: "Success",
    },

    {
      date: "22 Jan 2026",
      amount: "₹56,000",
      mode: "NEFT",
      bankRef: "TXN20904",
      status: "Success",
    },
  ];

  return (
    <div className="mt-4">
      <DataTable
        tableHeading="Disbursement History"
        columns={columns}
        data={data}
        showSearch={false}
      />
    </div>
  );
}
