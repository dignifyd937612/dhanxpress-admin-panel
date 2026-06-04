"use client";

import { Sun, Moon, Bell, Mail, Upload } from "lucide-react";

import ProfileDropdown from "./ProfileDropdown";
import CustomDropDown from "@/custom/CustomDropDown";

import { useTheme } from "@/context/ThemeContext";
import Breadcrumb from "./BreadCrumb";
import { usePathname } from "next/navigation";
import SearchInput from "../UI/SearchInput";
import DateRangeFilter from "./DateRangeFilter";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();

  const breadcrumbItems = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, arr) => ({
      label: segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      href:
        index === arr.length - 1
          ? null
          : "/" + arr.slice(0, index + 1).join("/"),
    }));

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 transition-colors dark:border-[#2a2a2a] dark:bg-[#121212]">
      <div className="mb-10 ml-3 flex items-center justify-between">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex h-10 items-center gap-3">
          <div
            onClick={toggleTheme}
            className="flex cursor-pointer items-center rounded-full bg-[#f3e8dd] p-1 transition-all dark:bg-[#242424]"
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${theme === "light" ? "bg-orange-400 text-white" : "text-gray-400"}`}
            >
              <Sun size={14} />
            </div>

            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${theme === "dark" ? "bg-gray-700 text-white" : "text-gray-500"}`}
            >
              <Moon size={14} />
            </div>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-white">
            <Mail size={16} />
          </div>

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-white">
            <Bell size={16} />

            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
          </div>

          <ProfileDropdown />
        </div>
      </div>

      <div className="ml-3 mt-10 flex items-center justify-between">
        <SearchInput />
        <div className="flex items-center gap-3">
          <CustomDropDown
            filters={["All", "Stocks", "Crypto"]}
            theme={theme}
            hideFirstOption={false}
          />

          <DateRangeFilter />

          <CustomDropDown
            filters={[
              "Last 7 days",
              "Last 30 days",
              "Last 3 months",
              "Last 1 year",
            ]}
            hideFirstOption={false}
            theme={theme}
          />

          <button className="flex items-center gap-2 rounded-lg bg-[#2f2f2f] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
            <Upload size={14} />
            Export CSV
          </button>
        </div>
      </div>
    </header>
  );
}
