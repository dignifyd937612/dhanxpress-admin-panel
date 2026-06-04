import TicketCard from "@/components/support/TicketCard";

const RecentTickets = () => {
  return (
    <>
      <TicketCard
        id="AI1018"
        title="System Bug"
        status="In Progress"
        tag="Open"
        color="orange"
      />

      <TicketCard
        id="AI1012"
        title="Legal Query"
        status="Pending"
        tag="Pending"
        color="red"
      />
    </>
  );
};

export default RecentTickets;
