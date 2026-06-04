import ContactOptionCard from "@/components/support/ContactOptionCard";
import { BookOpen, Mail, MessageSquare, Phone } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    subTitle: "diginity.io@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Support",
    subTitle: "+91 7569342224",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    subTitle: "Chat with AI / Agent",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    subTitle: "FAQ & Guides",
  },
];
const ContactOptions = () => {
  return (
    <>
      {contactOptions?.map((card, index) => (
        <ContactOptionCard
          key={index}
          icon={card?.icon}
          title={card?.title}
          subTitle={card?.subTitle}
        />
      ))}
    </>
  );
};

export default ContactOptions;
