"use client";

import Image from "next/image";

import { CheckCircle, Mail, MapPin, MoreHorizontal, Phone } from "lucide-react";

import dummyUser from "../../../../public/assets/common/dummy-user.png";

export default function BorrowerSummaryCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="absolute left-2 top-2 z-10 h-[145px] w-[175px]">
        <Image
          src={dummyUser}
          alt="Borrower"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="flex h-[72px] items-start justify-between rounded-t-lg bg-[#f5f5f5] pl-[190px] pr-6 pt-2 dark:bg-[#252525]">
        <div>
          <h2 className="text-[17px] font-semibold text-black dark:text-white">
            Rahul Sharma
            <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">
              - Personal Loan
            </span>
          </h2>

          <div className="mt-3 flex items-center gap-2 text-[14px] text-gray-600 dark:text-gray-300">
            <Phone size={13} className="text-orange-500" />

            <span>+91 7217604572</span>
          </div>
        </div>

        <div className="space-y-4 text-right text-[14px] text-black dark:text-white">
          <p>
            Loan ID:
            <span className="ml-1 font-semibold">LN-20945</span>
          </p>

          <p>
            EMI:
            <span className="ml-1 font-semibold">₹12,500</span>
          </p>
        </div>
      </div>

      <div className="flex h-[70px] items-center justify-between pl-[190px] pr-6">
        <div className="flex items-center gap-14 text-[14px] text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-orange-500" />
            Delhi
          </div>

          <div className="flex items-center gap-2">
            <Mail size={13} className="text-orange-500" />
            EMI ₹12,500
          </div>
        </div>

        <div className="text-[14px] text-black dark:text-white">
          Risk Level:
          <span className="ml-1 font-semibold">₹50,000</span>
        </div>
      </div>

      <div className="mt-2 flex h-[54px] items-center justify-between rounded-lg bg-[#f5f5f5] px-5 dark:bg-[#252525]">
        <div className="flex items-center text-[14px]">
          <span className="text-black dark:text-white">
            Approved: ₹1,50,000
          </span>

          <span className="mx-4 text-[18px] text-orange-500">→</span>

          <span className="flex items-center gap-1 text-green-600 dark:text-green-500">
            <CheckCircle size={15} />
            Disbursed: ₹1,00,000
          </span>

          <span className="mx-4 text-[18px] text-gray-400 dark:text-gray-500">
            ›
          </span>

          <span className="text-orange-500">Pending: ₹50,000</span>
        </div>

        <button className="rounded-full p-1 transition-all duration-300 hover:bg-white dark:hover:bg-[#303030]">
          <MoreHorizontal size={20} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
