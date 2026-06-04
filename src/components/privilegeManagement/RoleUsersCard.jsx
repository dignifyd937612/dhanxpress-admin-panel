import { CheckCircle, XCircle } from "lucide-react";

const users = [
  {
    name: "Deepika Rawat",
    active: true,
  },
  {
    name: "Rahul Sharma",
    active: true,
  },
  {
    name: "Neha Verma",
    active: false,
  },
  {
    name: "Ajay Kumar",
    active: true,
  },
];

export default function RoleUsersCard({ showButton = false }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 bg-[#fafafa] px-5 py-4 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <h2 className="font-semibold text-gray-900 dark:text-white">
          Users With This Role
        </h2>
      </div>

      <div className="p-4">
        {users.map((user) => (
          <div
            key={user.name}
            className="mb-4 flex items-center justify-between text-sm"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {user.name}
            </span>

            <span
              className={`flex items-center gap-1 ${
                user.active
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {user.active ? <CheckCircle size={14} /> : <XCircle size={14} />}

              {user.active ? "Active" : "Disabled"}
            </span>
          </div>
        ))}

        {showButton && (
          <button className="mt-3 w-full rounded-lg bg-[#4a4a4a] py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
            Assign New User
          </button>
        )}
      </div>
    </div>
  );
}
