import LoanOverview from "@/components/dashboard/LoanOverview";
import StatsCard from "@/components/dashboard/StatsCard";

const DashboardOverviewSection = () => {
  return (
    <>
      <div className="col-span-2 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            title="Total Recovery"
            amount="824,676.00"
            change="+12%"
            type="up"
          />

          <StatsCard
            title="Loan Pending"
            amount="824,676.00"
            change="+12%"
            type="down"
          />
        </div>

        <LoanOverview />
      </div>
    </>
  );
};

export default DashboardOverviewSection;
