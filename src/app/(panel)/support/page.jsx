"use client";

import SupportTicketForm from "@/components/support/SupportTicketForm";
import SupportCard from "@/components/support/SupportCard";
import RecentTickets from "@/sections/support/RecentTickets";
import ContactOptions from "@/sections/support/ContactOprions";

export default function SupportPanel() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <SupportCard heading={"Contact Options"} width={"3"}>
        <div className="space-y-4">
          <ContactOptions />
        </div>
      </SupportCard>
      <SupportCard heading={"Raise a Support Ticket"} width={"6"}>
        <SupportTicketForm />
      </SupportCard>
      <SupportCard heading={"Your Recent Ticket"} width={"3"}>
        <RecentTickets />
      </SupportCard>
    </div>
  );
}
