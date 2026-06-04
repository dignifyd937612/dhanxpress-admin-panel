"use client";

import { useState } from "react";

const initialModules = [
  {
    name: "Dashboard View",
    view: true,
    edit: true,
    delete: true,
  },
  {
    name: "Borrower Profile Page",
    view: true,
    edit: true,
    delete: false,
  },
  {
    name: "AI Follow-up Engine",
    view: true,
    edit: true,
    delete: false,
  },
  {
    name: "AI Recovery Task Manager",
    view: true,
    edit: true,
    delete: false,
  },
  {
    name: "Loan Disbursement",
    view: true,
    edit: true,
    delete: false,
  },
  {
    name: "Legal & Escalation Module",
    view: true,
    edit: true,
    delete: true,
  },
  {
    name: "Privilege Management",
    view: true,
    edit: true,
    delete: true,
  },
];

export default function PermissionTable() {
  const [modules, setModules] = useState(initialModules);

  const handleCheckboxChange = (index, field) => {
    setModules((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: !item[field],
            }
          : item,
      ),
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h2 className="font-semibold text-gray-900 dark:text-white">
          Permission for: Super Admin
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Module Name
              </th>

              <th className="px-6 py-3 text-center text-sm font-medium">
                View
              </th>

              <th className="px-6 py-3 text-center text-sm font-medium">
                Edit
              </th>

              <th className="px-6 py-3 text-center text-sm font-medium">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {modules.map((module, index) => (
              <tr
                key={module.name}
                className="border-b border-gray-200 transition-colors hover:bg-gray-50 dark:border-[#2a2a2a] dark:hover:bg-[#252525]"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {module.name}
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={module.view}
                    onChange={() => handleCheckboxChange(index, "view")}
                    className="h-4 w-4 cursor-pointer accent-orange-500"
                  />
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={module.edit}
                    onChange={() => handleCheckboxChange(index, "edit")}
                    className="h-4 w-4 cursor-pointer accent-orange-500"
                  />
                </td>

                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={module.delete}
                    onChange={() => handleCheckboxChange(index, "delete")}
                    className="h-4 w-4 cursor-pointer accent-orange-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 p-4 dark:border-[#2a2a2a]">
        <button
          onClick={() => console.log(modules)}
          className="w-full rounded-lg bg-[#4a4a4a] px-10 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
