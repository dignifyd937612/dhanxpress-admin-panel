import FollowUpRules from "@/components/aiFollowUp/FollowUpRules";
import FollowUpTable from "@/components/aiFollowUp/FollowUpTable";

const FollowUpManagementSection = () => {
  return (
    <div className="mt-6 grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <FollowUpRules />
      </div>

      <div className="col-span-9">
        <FollowUpTable />
      </div>
    </div>
  );
};

export default FollowUpManagementSection;
