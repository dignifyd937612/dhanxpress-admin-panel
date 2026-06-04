"use client";

import { MoreHorizontal, Pencil, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function RecommendationCard() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = () => {
    setVisible(false);
  };

  const handleEdit = () => {
    alert("Edit Recommendation");
    setMenuOpen(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative rounded-xl border border-gray-200 bg-white p-4 transition-all hover:shadow-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="mb-4 flex justify-between gap-3">
        <p
          className={`text-xs leading-5 text-gray-600 dark:text-gray-300 ${
            !expanded && "line-clamp-3"
          }`}
        >
          Increase recovery month wise budget in region a Increase recovery
          month wise budget in region recovery month wise budget in region.
        </p>

        <div className="relative shrink-0" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-[#252525] dark:hover:text-white"
          >
            <MoreHorizontal size={15} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-9 z-50 w-36 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-[#2a2a2a] dark:bg-[#1f1f1f]">
              <button
                onClick={handleEdit}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#252525]"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 transition-all hover:bg-red-50 dark:hover:bg-red-500/10"
              >
                <Trash2 size={14} />
                Delete
              </button>

              <button
                onClick={handleClose}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#252525]"
              >
                <X size={14} />
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-[10px] font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
          +12%
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-orange-500 transition-all hover:text-orange-600"
        >
          {expanded ? "Show Less" : "View Details →"}
        </button>
      </div>
    </div>
  );
}
