import { Check, Minus, RefreshCcw, ChevronRight } from "lucide-react";

export default function TimelineRow({
  status,
  title,
  leftDate,
  rightDate,
  rightText,
  isLast = false,
}) {
  return (
    <div className="flex min-h-[52px] gap-4">
      <div className="relative flex w-[36px] justify-center">
        {!isLast && (
          <div className="absolute bottom-0 top-6 w-[1px] bg-gray-400" />
        )}

        <div
          className={`z-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full ${
            status === "completed" ? "bg-green-600" : "bg-black"
          }`}
        >
          {status === "completed" ? (
            <Check size={14} className="text-white" />
          ) : (
            <Minus size={14} className="text-white" />
          )}
        </div>
      </div>

      <div className="mb-3 flex h-[38px] flex-1 items-center justify-between rounded bg-[#f5f5f5] px-5 dark:bg-[#252525] dark:text-white">
        <div className="flex items-center gap-4">
          <span className="font-medium">{title}</span>

          {leftDate && (
            <>
              <ChevronRight size={12} />

              <span>{leftDate}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          {rightDate && (
            <>
              <span>{rightDate}</span>

              <RefreshCcw size={12} />
            </>
          )}

          {rightText && <span>{rightText}</span>}
        </div>
      </div>
    </div>
  );
}
