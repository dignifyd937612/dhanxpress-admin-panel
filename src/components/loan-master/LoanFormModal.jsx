"use client";

import CustomDropDown from "@/custom/CustomDropDown";
import { X } from "lucide-react";
import loanFormBanner from "../../../public/assets/common/loanFormBanner.jpg";
import Image from "next/image";
import { useState } from "react";

export default function CreateLoanModal({ open, setOpen }) {
  const [tenureType, setTenureType] = useState("months");
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-2 shadow"
        >
          <X size={18} />
        </button>

        <div className="relative h-64 overflow-hidden bg-gradient-to-r from-[#f97316] via-[#f97316] to-[#000000]">
          <Image
            src={loanFormBanner}
            alt="Loan Banner"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className="text-4xl font-bold">Create New Loan</h2>

            <p className="mt-3 max-w-xl text-orange-100">
              Configure a new loan product with eligibility, interest rates and
              repayment terms.
            </p>
          </div>
        </div>

        <div className="max-h-[calc(90vh-256px)] overflow-y-auto p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Loan Name
              </label>
              <input
                type="text"
                placeholder="Personal Loan"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#f97316]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Loan Code
              </label>
              <input
                type="text"
                placeholder="PL001"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#f97316]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Loan Category
              </label>

              <CustomDropDown
                filters={[
                  "Select Category",
                  "Personal Loan",
                  "Home Loan",
                  "Vehicle Loan",
                  "Business Loan",
                  "Education Loan",
                ]}
                theme="dark"
                size="medium"
                fullWidth={true}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Loan Type
              </label>

              <CustomDropDown
                filters={["Select Type", "Secured", "Unsecured"]}
                theme="dark"
                size="medium"
                fullWidth={true}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Minimum Amount
              </label>

              <input
                type="number"
                placeholder="50000"
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Maximum Amount
              </label>

              <input
                type="number"
                placeholder="2000000"
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Interest Rate (%)
              </label>

              <input
                type="number"
                placeholder="12"
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-medium">Loan Tenure</label>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="tenureType"
                      value="days"
                      checked={tenureType === "days"}
                      onChange={(e) => setTenureType(e.target.value)}
                      className="accent-orange-500"
                    />
                    Days
                  </label>

                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="tenureType"
                      value="months"
                      checked={tenureType === "months"}
                      onChange={(e) => setTenureType(e.target.value)}
                      className="accent-orange-500"
                    />
                    Months
                  </label>

                  <label className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="tenureType"
                      value="years"
                      checked={tenureType === "years"}
                      onChange={(e) => setTenureType(e.target.value)}
                      className="accent-orange-500"
                    />
                    Years
                  </label>
                </div>
              </div>

              <input
                type="number"
                placeholder={`Enter tenure in ${tenureType}`}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#f97316]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Processing Fee (%)
              </label>

              <input
                type="number"
                placeholder="2"
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Minimum Credit Score
              </label>

              <input
                type="number"
                placeholder="700"
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Enter loan description..."
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#f97316]"
            />
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 p-5">
            <h3 className="mb-4 text-lg font-semibold">Additional Settings</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                Featured Loan
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                Show On Website
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                Instant Approval
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                Allow Online Apply
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3 border-t pt-6">
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl border border-gray-300 px-6 py-3 bg-[#000000] text-white font-medium "
            >
              Cancel
            </button>

            <button className="rounded-xl bg-[#f97316] px-6 py-3 font-medium text-white transition hover:bg-[#ea580c]">
              Create Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
