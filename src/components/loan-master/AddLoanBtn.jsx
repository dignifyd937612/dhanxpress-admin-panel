"use client";

import { useState } from "react";
import CreateLoanModal from "./LoanFormModal";

const AddLoanBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-end">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600"
        >
          <span className="text-base leading-none">+</span>
          Create New Loan
        </button>
      </div>

      <CreateLoanModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AddLoanBtn;
