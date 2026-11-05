"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, HelpCircle, LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import collapselogo from "../../../public/assets/common/logo2.png";
import dignifyd_logo from "../../../public/assets/common/light-logo.webp";
import dignifyd_dark_logo from "../../../public/assets/common/dignifyd_dark_logo.webp";

import { menuItems } from "@/utils/common/menuItems";
import { useTheme } from "@/context/ThemeContext";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const pathname = usePathname();

  const { theme } = useTheme();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex h-screen shrink-0 flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-[#2a2a2a] dark:bg-[#121212] ${collapsed ? "w-[90px]" : "w-72"}`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-10 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-orange-500 bg-orange-500 text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-110 hover:bg-orange-600 dark:border-orange-500 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      <div className="py-6">
        <div
          className={`flex items-center ${collapsed ? "justify-center" : ""}`}
        >
          <Image
            src={
              collapsed
                ? collapselogo
                : theme === "dark"
                  ? dignifyd_dark_logo
                  : dignifyd_logo
            }
            alt="logo"
            width={collapsed ? 60 : 250}
            height={80}
            priority
            className="object-contain transition-all duration-300"
          />
        </div>

        <div className="mt-5 h-px bg-gray-200 dark:bg-[#2a2a2a]" />
      </div>

      <div
        className={`${styles["sidebar-scroll"]} flex-1 overflow-y-auto px-4`}
      >
        <div className="space-y-1 pb-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const isActive = pathname === item.pathname;

            return (
              <Link
                key={index}
                href={item.pathname}
                className={`flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200 ${collapsed ? "justify-center" : "gap-3"} ${isActive ? ` bg-orange-100 font-medium text-orange-600 dark:bg-[#2b2116] dark:text-orange-400 ` : ` text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-[#252525] `}`}
              >
                <Icon size={18} strokeWidth={2} className="sidebar-icon" />

                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-4 dark:border-[#2a2a2a]">
        <div className="space-y-1">
          <Link
            href="/support"
            className={`flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200 ${collapsed ? "justify-center" : "gap-3"} text-gray-700 hover:bg-gray-100 hover:text-orange-500 dark:text-white dark:hover:bg-[#252525] dark:hover:text-orange-400`}
          >
            <HelpCircle size={18} />

            {!collapsed && <span>Help Support</span>}
          </Link>

          <Link
            href="/logout"
            className={`flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200 ${collapsed ? "justify-center" : "gap-3"} text-gray-700 hover:bg-gray-100 hover:text-red-500 dark:text-white dark:hover:bg-[#252525] dark:hover:text-red-400`}
          >
            <LogOut size={18} />

            {!collapsed && <span>Log Out</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
