"use client";

export default function LegalCard({
  title,
  icon: Icon,
  value,
  buttonText,
  split = false,
  left,
  right,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="border-b border-gray-200 bg-[#fafafa] px-4 py-3 text-center text-[18px] font-medium text-gray-900 dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white">
        {title}
      </div>

      {!split ? (
        <div className="flex flex-col items-center px-5 py-6">
          <Icon size={52} className="text-orange-400" />

          <h2 className="mt-3 text-[42px] font-semibold leading-none text-orange-400">
            {value}
          </h2>

          <button className="mt-5 w-full rounded-lg bg-[#7b7b7b] py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#666] dark:bg-orange-500 dark:hover:bg-orange-600">
            {buttonText}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center border-r border-gray-200 px-5 py-6 dark:border-[#2a2a2a]">
            <left.icon size={52} className="text-orange-400" />

            <h2 className="mt-3 text-[42px] font-semibold leading-none text-orange-400">
              {left.value}
            </h2>

            <p className="mt-3 text-[24px] font-medium text-gray-900 dark:text-white">
              {left.label}
            </p>
          </div>

          <div className="flex flex-col items-center px-5 py-6">
            <right.icon size={52} className="text-orange-400" />

            <h2 className="mt-3 text-[42px] font-semibold leading-none text-orange-400">
              {right.value}
            </h2>

            <p className="mt-3 text-[24px] font-medium text-gray-900 dark:text-white">
              {right.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
