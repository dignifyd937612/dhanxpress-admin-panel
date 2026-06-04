"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { User, Settings, LogOut } from "lucide-react";

export default function ProfileDropdown() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center justify-center">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="block h-8 w-8 cursor-pointer rounded-full object-cover ring-2 ring-orange-100 transition-all hover:ring-orange-300 dark:ring-[#333] dark:hover:ring-orange-500"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 top-full z-50 mt-2 w-60 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-[#2d2d2d] dark:bg-[#1a1a1a]"
      >
        <div className="mb-2 border-b border-gray-100 px-3 py-3 dark:border-[#2d2d2d]">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
            Sumit Singh
          </h4>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            sumit@gmail.com
          </p>
        </div>

        {/* Profile */}
        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition hover:bg-orange-50 dark:text-gray-200 dark:hover:bg-[#252525]">
            <User size={16} />
            <span className="text-sm">Profile</span>
          </button>
        </MenuItem>

        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition hover:bg-orange-50 dark:text-gray-200 dark:hover:bg-[#252525]">
            <Settings size={16} />
            <span className="text-sm">Settings</span>
          </button>
        </MenuItem>

        <div className="my-2 h-px bg-gray-100 dark:bg-[#2d2d2d]" />

        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-red-500 transition hover:bg-red-50 dark:hover:bg-[#2a1b1b]">
            <LogOut size={16} />
            <span className="text-sm">Logout</span>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
