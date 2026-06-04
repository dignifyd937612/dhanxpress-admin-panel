import DisbursementFilters from "@/components/loan-disbursement/DisbursementFilters";
import DisbursementTable from "@/components/loan-disbursement/DisbursementTable";
import StatsCards from "@/components/loan-disbursement/StatsCards";
import TransactionDetails from "@/components/loan-disbursement/TransactionDetails";

export default function LoanDisbursementPage() {
  return (
    <div className="rounded-2xl space-y-5 p-5 bg-[#ffffff] dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <StatsCards />

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <DisbursementFilters />
        </div>

        <div className="col-span-6">
          <DisbursementTable />
        </div>

        <div className="col-span-3">
          <TransactionDetails />
        </div>
      </div>
    </div>
  );
}
