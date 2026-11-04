"use client";
import { ChevronRight, UserPlus } from "lucide-react";
import { useState } from "react";
import ConfirmationModal from "../common/ConfirmationModal";
import AddRoleModalBody from "./AddNewRoleModal";

const roles = [
  "Super Admin",
  "Admin",
  "Recovery Manager",
  "Field Agent",
  "Supportive Executive",
];

export default function UserRoles() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
        <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            User Roles
          </h2>
        </div>

        <div className="p-3">
          {roles.map((role, index) => (
            <button
              key={role}
              className={`mb-2 flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm transition-all duration-300 ${
                index === 0
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-[#252525]"
              }`}
            >
              {role}

              {index === 0 && <ChevronRight size={16} />}
            </button>
          ))}

          <button
            onClick={() => setOpen(true)}
            className="mt-40 flex w-full items-center justify-center gap-2 rounded-lg bg-[#fafafa] py-3 text-sm font-medium text-orange-500 transition-all duration-300 hover:bg-orange-50 dark:bg-[#252525] dark:hover:bg-[#303030]"
          >
            <UserPlus size={16} />
            Add New Role
          </button>
        </div>
      </div>

      {open && (
        <ConfirmationModal title="Add New Role" onClose={setOpen}>
          <AddRoleModalBody onclose={setOpen} />
        </ConfirmationModal>
      )}
    </>
  );
}
