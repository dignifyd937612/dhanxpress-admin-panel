import { Eye } from "lucide-react";

export const loanOverviewColumns = [
  {
    label: "Date",
    key: "date",
  },
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Amount",
    key: "amount",
  },
  {
    label: "Category",
    key: "category",
  },
  {
    label: "Status",
    key: "status",
    Cell: ({ value }) => (
      <>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              value === "Success" ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span
            className={value === "Success" ? "text-green-500" : "text-red-500"}
          >
            {value}
          </span>
        </div>
      </>
    ),
  },
  {
    label: "Overdue Amount",
    key: "overdueAmount",
  },
  {
    label: "Follow Up",
    key: "followUp",
  },
  {
    label: "Action",
    key: "id",

    Cell: ({ row, actions }) => (
      <button
        onClick={() => actions.viewLoan(row)}
        className="hover:text-orange-500"
      >
        <Eye size={16} />
      </button>
    ),
  },
];
