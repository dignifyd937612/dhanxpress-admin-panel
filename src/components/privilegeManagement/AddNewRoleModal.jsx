"use client";

import { useState } from "react";

const modules = [
  "Dashboard View",
  "Borrower Profile Page",
  "AI Follow-up Engine",
  "AI Recovery Task Manager",
  "Loan Disbursement",
  "Legal & Escalation Module",
  "Privilege Management",
];

const users = ["Deepika Rawat", "Rahul Sharma", "Ajay Kumar", "Neha Verma"];

export default function AddRoleModalBody({ onclose }) {
  const [step, setStep] = useState(1);

  const [roleData, setRoleData] = useState({
    roleName: "",
    description: "",
    status: "active",
  });

  const [permissions, setPermissions] = useState(
    modules.map((module) => ({
      module,
      view: true,
      edit: false,
      delete: false,
    })),
  );

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handlePermissionChange = (index, field) => {
    setPermissions((prev) =>
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

  const toggleUser = (user) => {
    setSelectedUsers((prev) =>
      prev.includes(user)
        ? prev.filter((item) => item !== user)
        : [...prev, user],
    );
  };

  const handleCreateRole = () => {
    const payload = {
      role: roleData,
      permissions,
      users: selectedUsers,
    };

    console.log(payload);
    onclose(false);
  };

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-center">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                  step >= item
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-500 dark:bg-[#252525] dark:text-gray-400"
                }`}
              >
                {item}
              </div>

              {item !== 3 && (
                <div
                  className={`h-[2px] w-12 ${
                    step > item
                      ? "bg-orange-500"
                      : "bg-gray-200 dark:bg-[#252525]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Role Name
            </label>

            <input
              type="text"
              value={roleData.roleName}
              onChange={(e) =>
                setRoleData({
                  ...roleData,
                  roleName: e.target.value,
                })
              }
              placeholder="Enter role name"
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-orange-500 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>

            <textarea
              rows={4}
              value={roleData.description}
              onChange={(e) =>
                setRoleData({
                  ...roleData,
                  description: e.target.value,
                })
              }
              placeholder="Enter role description"
              className="w-full rounded-xl border border-gray-200 bg-white p-4 text-sm outline-none focus:border-orange-500 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-900 dark:text-white">
              Status
            </label>

            <div className="flex gap-5">
              {["active", "inactive"].map((status) => (
                <label key={status} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    checked={roleData.status === status}
                    onChange={() =>
                      setRoleData({
                        ...roleData,
                        status,
                      })
                    }
                    className="accent-orange-500"
                  />

                  <span className="capitalize dark:text-white">{status}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="overflow-hidden rounded-xl border dark:border-[#2a2a2a]">
          <table className="w-full">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm">Module</th>

                <th className="text-center text-sm">View</th>

                <th className="text-center text-sm">Edit</th>

                <th className="text-center text-sm">Delete</th>
              </tr>
            </thead>

            <tbody>
              {permissions.map((item, index) => (
                <tr
                  key={item.module}
                  className="border-b dark:border-[#2a2a2a]"
                >
                  <td className="px-4 py-3 text-sm dark:text-white">
                    {item.module}
                  </td>

                  {["view", "edit", "delete"].map((field) => (
                    <td key={field} className="text-center">
                      <input
                        type="checkbox"
                        checked={item[field]}
                        onChange={() => handlePermissionChange(index, field)}
                        className="accent-orange-500"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          {users.map((user) => (
            <label
              key={user}
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 dark:border-[#2a2a2a]"
            >
              <span className="text-sm dark:text-white">{user}</span>

              <input
                type="checkbox"
                checked={selectedUsers.includes(user)}
                onChange={() => toggleUser(user)}
                className="accent-orange-500"
              />
            </label>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {step !== 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm dark:border-[#2a2a2a] dark:text-white"
          >
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm text-white"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleCreateRole}
            className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm text-white"
          >
            Create Role
          </button>
        )}
      </div>
    </div>
  );
}
