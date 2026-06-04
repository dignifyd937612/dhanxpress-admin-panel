import { Pencil } from "lucide-react";

export default function AIInsightCard({
  icon,
  title,
  heading,
  subHeading,
  buttons = [],
  badge,
  badgeColor = "orange",
  buttonPosition = "left",
  showEditButton = true,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#fafafa] px-4 py-3 dark:border-[#2a2a2a] dark:bg-[#252525]">
        <div className="flex items-center gap-2">
          <span>{icon}</span>

          <h3 className="text-[11px] font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
            {title}
          </h3>
        </div>

        {showEditButton && (
          <button className="flex h-7 w-7 items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:bg-orange-500 hover:text-white dark:text-gray-400">
            <Pencil size={14} />
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[15px] font-semibold text-gray-900 dark:text-white">
              {heading}
            </h2>

            {subHeading && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {subHeading}
              </p>
            )}
          </div>

          {badge && (
            <div
              className={`whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold ${
                badgeColor === "orange"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                  : badgeColor === "red"
                    ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                    : "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
              }`}
            >
              {badge}
            </div>
          )}
        </div>

        {buttons.length > 0 && (
          <div
            className={`flex flex-wrap gap-2 ${
              buttonPosition === "right" ? "justify-end" : "justify-start"
            }`}
          >
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`rounded-md px-3 py-2 text-xs transition-all duration-300 ${
                  btn.type === "danger"
                    ? "bg-[#ff5a5a] text-white hover:bg-red-500"
                    : "bg-[#efefef] text-gray-800 hover:bg-gray-200 dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-[#303030]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{btn.label}</span>
                  {btn.icon}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
