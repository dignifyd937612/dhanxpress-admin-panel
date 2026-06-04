"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

import { useTheme } from "@/context/ThemeContext";

import styles from "./DateRangeFilter.module.scss";

import "react-day-picker/dist/style.css";

export default function DateRangeFilter() {
  const { theme } = useTheme();

  const [range, setRange] = useState();
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const displayValue =
    range?.from && range?.to
      ? `${format(range.from, "MM/dd/yyyy")} - ${format(range.to, "MM/dd/yyyy")}`
      : "Select Date Range";

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-11 min-w-[250px] items-center justify-between rounded-xl border px-4 text-sm shadow-sm transition-all duration-300 hover:shadow-md ${theme === "dark" ? "border-[#2a2a2a] bg-[#1f1f1f] text-white hover:border-orange-500" : "border-gray-300 bg-white text-gray-900 hover:border-orange-400"} `}
      >
        <span>{displayValue}</span>

        <CalendarDays size={16} />
      </button>

      {open && (
        <div
          className={`absolute right-0 top-14 z-50 w-[760px] rounded-2xl border p-5 shadow-2xl ${theme === "dark" ? "border-[#2a2a2a] bg-[#151515]" : "border-gray-200 bg-white"} `}
        >
          <DayPicker
            mode="range"
            numberOfMonths={2}
            fixedWeeks
            showOutsideDays
            selected={range}
            onSelect={setRange}
            className={
              theme === "dark" ? styles.darkCalendar : styles.lightCalendar
            }
          />
        </div>
      )}
    </div>
  );
}
