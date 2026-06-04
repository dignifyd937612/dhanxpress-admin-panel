import { FileText, CheckCircle2, FileEdit, XCircle } from "lucide-react";

const stats = [
  {
    title: "Total Loans",
    value: "120",
    percentage: "All Time",
    icon: FileText,
    iconBg: "bg-blue-100 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Loans",
    value: "85",
    percentage: "70.83%",
    icon: CheckCircle2,
    iconBg: "bg-green-100 dark:bg-green-500/15",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Draft Loans",
    value: "20",
    percentage: "16.67%",
    icon: FileEdit,
    iconBg: "bg-yellow-100 dark:bg-yellow-500/15",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: "Disabled Loans",
    value: "15",
    percentage: "12.5%",
    icon: XCircle,
    iconBg: "bg-pink-100 dark:bg-pink-500/15",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
];

export default function LoanStats() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <Icon className={`h-7 w-7 ${item.iconColor}`} />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="text-sm font-medium text-slate-600 dark:text-gray-300">
                  {item.title}
                </p>

                <span className="text-xs text-slate-400 dark:text-gray-500">
                  {item.percentage}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
