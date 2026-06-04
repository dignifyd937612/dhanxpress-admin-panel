export default function AnalyticsCard({
  title,
  children,
  buttonText,
  buttonColor = "gray",
  buttonIcon,
}) {
  return (
    <div className="flex h-[320px] flex-col overflow-hidden rounded-2xl border dark:border-[#2a2a2a]">
      <div
        className="border-b bg-[#f8f8f8] px-4 py-3 text-center text-[15px] font-semibold dark:border-[#2a2a2a] dark:bg-[#252525] dark:text-white
      "
      >
        {title}
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="h-[190px]">{children}</div>

        <button
          className={`mt-4 flex h-[42px] w-full items-center justify-center gap-2 rounded-md text-[12px] font-medium text-white ${buttonColor === "red" ? "bg-[#ff5a5a]" : buttonColor === "dark" ? "bg-[#7a7a7a]" : "bg-black"} `}
        >
          {buttonIcon}

          {buttonText}
        </button>
      </div>
    </div>
  );
}
