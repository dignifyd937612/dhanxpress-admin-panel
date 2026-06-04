"use client";

import { useMemo, useState, useEffect } from "react";
import SearchInput from "../UI/SearchInput";
import CustomDropDown from "@/custom/CustomDropDown";

export default function DataTable({
  propsColumn = [],
  propsData = [],
  actions = {},
  tableHeading = "",
  filters = [],
  showSearch = false,
  searchPosition = "left",
  showRowsPerPage = true,
  showPagination = true,
  hideFirstOption = true,
  subHeading = "",
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const showTopSection = showSearch || filters.length > 0;

  const filteredData = useMemo(() => {
    if (!search) return propsData;

    return propsData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, propsData]);

  useEffect(() => {
    setPage(1);
  }, [search, rowsPerPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const visibleData = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, page, rowsPerPage]);

  const startRecord =
    filteredData.length === 0 ? 0 : (page - 1) * rowsPerPage + 1;

  const endRecord = Math.min(page * rowsPerPage, filteredData.length);

  return (
    <div>
      {showTopSection && (
        <div
          className={`mb-4 flex items-center ${showSearch && searchPosition === "left" ? "justify-between" : "justify-end"}`}
        >
          {showSearch && searchPosition === "left" && (
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          <div className="flex items-center gap-3">
            {filters.map((item, index) => (
              <CustomDropDown
                key={index}
                filters={item.filters}
                size={item.size}
                theme={item.theme}
                hideFirstOption={hideFirstOption}
              />
            ))}

            {showSearch && searchPosition === "right" && (
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
          </div>
        </div>
      )}

      {tableHeading && (
        <div className="mb-5 flex items-center gap-3">
          <div className="h-10 w-1 rounded-full bg-orange-500" />

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {tableHeading}
            </h2>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {subHeading}
            </p>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead className="bg-orange-500 text-white">
              <tr>
                {propsColumn.map((col) => (
                  <th
                    key={col.key}
                    className={`whitespace-nowrap px-4 py-3 font-medium ${col.align || "text-left"}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visibleData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-gray-200 transition-colors hover:bg-gray-50 dark:border-[#2a2a2a] dark:hover:bg-[#222]"
                >
                  {propsColumn.map((col) => {
                    const value = row[col.key];

                    return (
                      <td
                        key={col.key}
                        className={`whitespace-nowrap px-4 py-3 text-gray-800 dark:text-gray-200 ${col.cellClassName || ""}`}
                      >
                        {col.Cell
                          ? col.Cell({
                              value,
                              row,
                              rowIndex,
                              column: col,
                              actions,
                            })
                          : value}
                      </td>
                    );
                  })}
                </tr>
              ))}

              {visibleData.length === 0 && (
                <tr>
                  <td
                    colSpan={propsColumn.length}
                    className="py-10 text-center text-gray-500 dark:text-gray-400"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {(showRowsPerPage || showPagination) && (
          <div className="flex flex-wrap items-center justify-between border-t border-gray-200 px-5 py-4 dark:border-[#2a2a2a]">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-medium">{startRecord}</span>-
              <span className="font-medium">{endRecord}</span> of{" "}
              <span className="font-medium">{filteredData.length}</span>
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Rows per page
                </span>

                <select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  className="h-9 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-[#242424] dark:text-white"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-100 disabled:opacity-40 dark:border-[#444] dark:text-white dark:hover:bg-[#2a2a2a]"
                >
                  ←
                </button>

                <div className="rounded-lg bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-600 dark:bg-[#332411] dark:text-orange-400">
                  {page}
                </div>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  of {totalPages}
                </span>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 transition-colors hover:bg-gray-100 disabled:opacity-40 dark:border-[#444] dark:text-white dark:hover:bg-[#2a2a2a]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
