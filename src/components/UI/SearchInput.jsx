"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchInput({
  placeholder = "Search anything...",
  onSearch,
  className = "",
}) {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div
      className={`group flex h-12 w-[320px] items-center rounded-2xl border border-gray-200 bg-white px-4 shadow-sm transition-all duration-300 focus-within:border-orange-400 focus-within:shadow-lg hover:border-orange-300 hover:shadow-md dark:border-gray-700 dark:bg-[#1f1f1f] dark:hover:border-orange-500/50 ${className} `}
    >
      <Search
        size={18}
        className="text-gray-400 transition-all duration-300 group-focus-within:text-orange-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="ml-3 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-white"
      />

      {value && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
      )}
    </div>
  );
}
