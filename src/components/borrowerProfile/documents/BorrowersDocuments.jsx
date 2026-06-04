import { CircleAlert, FileCheck, FileClock, Upload } from "lucide-react";
import DocumentTabs from "./DocumentsTabs";

export default function BorrowersDocuments() {
  const stats = [
    {
      title: "Docs Owed",
      value: "5",
      icon: CircleAlert,
    },
    {
      title: "Docs Pending Review",
      value: "4",
      icon: FileClock,
    },
    {
      title: "Docs Accepted",
      value: "12/13",
      icon: FileCheck,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="grid grid-cols-3 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-5 transition-all duration-300 hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#252525]"
            >
              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-[#1a1a1a]">
                  <Icon
                    size={16}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.title}
                </p>
              </div>

              <h2 className="text-[34px] font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button className="flex items-center gap-2 rounded-xl bg-[#4b4b4b] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-[0.98] dark:bg-orange-500 dark:hover:bg-orange-600">
          <Upload size={16} />
          Upload Document
        </button>
      </div>

      <div className="mt-6">
        <DocumentTabs />
      </div>
    </div>
  );
}
