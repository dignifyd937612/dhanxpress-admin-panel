import AiAssistant from "@/components/dashboard/AiAssistant";
import TotalLoanCard from "@/components/dashboard/LoanChart";

const DashboardAssistantSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <AiAssistant />
        <TotalLoanCard />
      </div>
    </>
  );
};

export default DashboardAssistantSection;
