import ProfileContentSection from "@/sections/borrower-profile/ProfileContentSection";
import ProfileHeaderSection from "@/sections/borrower-profile/ProfileHeaderSection";
import ProfileSidebarSection from "@/sections/borrower-profile/ProfileSidebarSection";

export default function BorrowerProfile() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <ProfileSidebarSection />
      <div className="flex flex-1 flex-col">
        <ProfileHeaderSection />
        <ProfileContentSection />
      </div>
    </div>
  );
}
