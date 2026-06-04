import FailureTimelineRow from "./FailureTimelineRow";
import TimelineRow from "./TimelineItem";

const timeline = [
  {
    status: "completed",
    title: "Application Approved",
    leftDate: "11 Jan 2026",
    rightDate: "11 Jan 2026",
  },
  {
    status: "completed",
    title: "KYC Verified",
    leftDate: "12 Jan 2026",
    rightDate: "12 Jan 2026",
  },
  {
    status: "completed",
    title: "Bank Account Verified",
    leftDate: "13 Jan 2026",
    rightDate: "13 Jan 2026",
  },
];

export default function DisbursementTimeline() {
  return (
    <div className="mt-4">
      {timeline.map((item, index) => (
        <TimelineRow key={index} {...item} />
      ))}

      <FailureTimelineRow />

      <TimelineRow
        status="pending"
        title="Amount Credited"
        rightText="Pending"
        isLast
      />
    </div>
  );
}
