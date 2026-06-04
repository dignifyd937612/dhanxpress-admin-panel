"use client";

import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const CustomDropDown = ({
  filters = [],
  size = "medium",
  theme = "dark",
  defaultValue,
  onChange,
  hideFirstOption = true,
  fullWidth = false,
}) => {
  const [selected, setSelected] = useState(defaultValue || filters[0]);

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const isImageDropdown = filters.length > 0 && typeof filters[0] !== "string";

  const sizes = {
    extraSmall: {
      button: "h-[30px] min-w-[30px] px-2 text-xs rounded-xl",
      item: "px-3 py-2 text-xs",
      icon: 12,
    },
    small: {
      button: "h-[34px] min-w-[100px] px-3 text-xs rounded-xl",
      item: "px-3 py-2 text-xs",
      icon: 14,
    },

    medium: {
      button: "h-[42px] min-w-[125px] px-4 text-sm rounded-2xl",
      item: "px-4 py-3 text-sm",
      icon: 16,
    },

    large: {
      button: "h-[50px] min-w-[150px] px-5 text-base rounded-2xl",
      item: "px-5 py-4 text-base",
      icon: 18,
    },
  };

  const themes = {
    dark: {
      button:
        "bg-gradient-to-b from-[#2f2f2f] to-[#1f1f1f] border-[#3a3a3a] text-white shadow-[0_4px_15px_rgba(0,0,0,0.25)]",

      dropdown:
        "bg-[#1f1f1f] border-[#2d2d2d] shadow-[0_10px_30px_rgba(0,0,0,0.35)]",

      itemActive: "bg-[#2c2c2c] text-white",

      itemInactive: "text-white hover:bg-[#2a2a2a]",

      check: "text-orange-400 justify-end",
    },

    light: {
      button:
        "bg-white border-gray-200 text-black shadow-[0_4px_15px_rgba(0,0,0,0.08)]",

      dropdown:
        "bg-white border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]",

      itemActive: "bg-orange-50 text-orange-500",

      itemInactive: "text-gray-900 hover:bg-gray-100",

      check: "text-orange-500 justify",
    },
  };

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
    onChange?.(item);
  };

  return (
    <div
      className={`relative ${fullWidth ? "w-full" : "inline-block"}`}
      ref={dropdownRef}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
      tabIndex={0}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between gap-3 border font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${fullWidth ? "w-full" : ""} ${sizes[size].button} ${themes[theme].button} `}
      >
        {isImageDropdown ? (
          <Image
            src={selected}
            alt="selected"
            width={20}
            height={20}
            className="object-contain"
          />
        ) : (
          <span>{selected}</span>
        )}

        <ChevronDown
          size={sizes[size].icon}
          className={`transition-all duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-0 top-[calc(100%+10px)] z-50 w-full origin-top overflow-hidden border transition-all duration-300 ${themes[theme].dropdown} ${size === "small" ? "rounded-xl" : "rounded-2xl"} ${open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"} `}
      >
        {(hideFirstOption ? filters.slice(1) : filters).map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(item)}
            className={`flex w-full items-center justify-between transition-all duration-200 ${sizes[size].item} ${selected === item ? themes[theme].itemActive : themes[theme].itemInactive} `}
          >
            {isImageDropdown ? (
              <Image
                src={item}
                alt="option"
                width={20}
                height={20}
                className="object-contain"
              />
            ) : (
              <>
                <span>{item}</span>

                {selected === item && (
                  <Check
                    size={sizes[size].icon - 2}
                    className={themes[theme].check}
                  />
                )}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomDropDown;
