import AddLoanBtn from "@/components/loan-master/AddLoanBtn";
import LoanStats from "@/components/loan-master/LoanStats";
import LoanTable from "@/components/loan-master/LoanTable";

export default function LoanMasterPage() {
  return (
    <div className="space-y-6">
      <LoanStats />
      <AddLoanBtn />
      <LoanTable />
    </div>
  );
}
