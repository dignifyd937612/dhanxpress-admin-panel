"use client";

import PermissionTable from "@/components/privilegeManagement/PermissionTable";
import RoleUsersCard from "@/components/privilegeManagement/RoleUsersCard";
import UserRoles from "@/components/privilegeManagement/UserRoles";

export default function PrivilegeManagement() {
  return (
    <>
      <div className="rounded-2xl grid grid-cols-12 bg-white dark:bg-[#1a1a1a] gap-4 p-5 ">
        <div className="col-span-3">
          <UserRoles />
        </div>

        <div className="col-span-6">
          <PermissionTable />
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <RoleUsersCard showButton />
          <RoleUsersCard />
        </div>
      </div>
    </>
  );
}
