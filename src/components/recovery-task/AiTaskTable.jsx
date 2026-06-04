import { ArrowRight, BadgeIndianRupee, FileUp, UserCog } from "lucide-react";
import DataTable from "../UI/DataTable";

const columns = [
  { label: "Borrower", key: "name" },
  { label: "Amount Due", key: "amount" },
  { label: "Risk", key: "risk" },
  { label: "Last Action", key: "action_done" },
  { label: "Next AI Step", key: "next_step" },
];


const data = [
  {
    name: "Rahul Singh",
    amount: "₹12,500",
    risk: "High",
    action_done: "SMS Sent",
    next_step: "Call Today",
  },
  {
    name: "Rahul Singh",
    amount: "₹12,500",
    risk: "Medium",
    action_done: "SMS Sent",
    next_step: "Whatsapp Tomorrow",
  },
  {
    name: "Rahul Singh",
    amount: "₹12,500",
    risk: "High",
    action_done: "SMS Sent",
    next_step: "Call Today",
  },
  {
    name: "Rahul Singh",
    amount: "₹12,500",
    risk: "Low",
    action_done: "SMS Sent",
    next_step: "Call Today",
  },
];

const AiTaskTable = () => {
  return (
    <>
      <div className="col-span-9 p-4">
        <DataTable
          columns={columns}
          data={data}
          showSearch={true}
          searchPosition="left"
          filters={[
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
          ]}
        />

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#f6d58c] bg-[#fff7e8] px-5 py-4">
          <p className="text-sm text-[#4b4b4b]">
            👋 No manual update needed - AI auto refreshes
          </p>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#0c7a12] py-3 text-sm font-medium text-white transition-all hover:opacity-90">
            <UserCog size={16} />
            Assign Field Agent
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#222] py-3 text-sm font-medium text-white transition-all hover:bg-black">
            <BadgeIndianRupee size={16} />
            Send Payment Link
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#f8a53d] py-3 text-sm font-medium text-white transition-all hover:opacity-90">
            <ArrowRight size={16} />
            Offer Negotiation
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#222] py-3 text-sm font-medium text-white transition-all hover:bg-black">
            <FileUp size={16} />
            Export CSV
          </button>
        </div>
      </div>
    </>
  );
};

export default AiTaskTable;
