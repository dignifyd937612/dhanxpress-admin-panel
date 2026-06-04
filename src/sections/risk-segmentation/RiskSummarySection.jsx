const RiskSummarySection = () => {
  const summaryData = {
    totalOverdue: "₹4.2cr",
    accountDefault: 420,
  };

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-3 ">
        <div className="border rounded-xl px-4 py-2 text-sm shadow-sm dark:text-white border dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
          Total Overdue : {summaryData.totalOverdue}
        </div>

        <div className="border rounded-xl px-4 py-2 text-sm shadow-sm dark:text-white border dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
          Account in default : {summaryData.accountDefault}
        </div>
      </div>
    </div>
  );
};

export default RiskSummarySection;
