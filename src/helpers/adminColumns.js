import { Eye } from "lucide-react";

export const adminColumns = [
  {
    label: "Loan Name",
    key: "loanName",
    width: "250px",
  },

  {
    label: "Status",
    key: "status",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <span
          className={
            data.status === "Active" ? "text-green-600" : "text-red-500"
          }
        >
          {data.status}
        </span>
      );
    },
  },

  {
    label: "Action",
    key: "action",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <button onClick={() => console.log(data)}>
          <Eye size={14} />
        </button>
      );
    },
  },
];
