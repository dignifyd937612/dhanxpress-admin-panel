import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MoreHorizontalIcon } from "lucide-react";

export default function MoreOptionsDropdown({
  options = [],
  onAction,
  Icon = MoreHorizontalIcon,
  iconSize = 20,
}) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#374151] text-white transition-all hover:scale-105 dark:bg-[#252525]">
        <Icon size={iconSize} />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        transition
        className="z-50 mt-2 w-44 rounded-xl border border-gray-200 bg-white p-1 shadow-xl transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]"
      >
        {options.map((option) => (
          <MenuItem key={option.key}>
            <button
              onClick={() => onAction?.(option.key)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                option.danger
                  ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#252525]"
              }`}
            >
              {option.icon && <option.icon size={16} />}

              {option.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
