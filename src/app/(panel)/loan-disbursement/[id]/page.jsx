import BorrowerSummaryCard from "@/components/loan-disbursement/userdisbursement/BorrowerSummaryCard";
import CurrentStageCard from "@/components/loan-disbursement/userdisbursement/CurrentStageCard";
import DisbursementHistory from "@/components/loan-disbursement/userdisbursement/DisbursementHistory";
import DisbursementTimeline from "@/components/loan-disbursement/userdisbursement/DisbursementTimeline";

const UserDisbursement = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <BorrowerSummaryCard />

          <DisbursementTimeline />

          <DisbursementHistory />
        </div>

        <div className="col-span-3">
          <CurrentStageCard />
        </div>
      </div>
    </>
  );
};

export default UserDisbursement;
