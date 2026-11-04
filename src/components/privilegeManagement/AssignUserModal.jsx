"use client";

import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    assigned: true,
  },
  {
    id: 2,
    name: "Deepika Rawat",
    assigned: false,
  },
  {
    id: 3,
    name: "Neha Verma",
    assigned: false,
  },
  {
    id: 4,
    name: "Ajay Kumar",
    assigned: false,
  },
];

export default function AssignUserModal({ onClose }) {
  const [users, setUsers] = useState(initialUsers);

  const handleAssign = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              assigned: true,
            }
          : user,
      ),
    );
  };

  return (
    <div className="p-5">
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 dark:border-[#2a2a2a]"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {user.name}
            </span>

            {user.assigned ? (
              <span className="rounded-lg bg-green-100 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/10">
                Assigned
              </span>
            ) : (
              <button
                onClick={() => handleAssign(user.id)}
                className="rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-orange-600"
              >
                Assign
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => onClose(false)}
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-orange-600"
        >
          Done
        </button>
      </div>
    </div>
  );
}
