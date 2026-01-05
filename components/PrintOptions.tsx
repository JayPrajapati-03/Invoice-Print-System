"use client";

import { useState } from "react";

export default function PrintOptions() {
  const [copies, setCopies] = useState(1);

  const handlePrint = () => {
    const invoice = document.querySelector(".invoice");
    if (!invoice) return;

    // Remove previously cloned invoices (if any)
    document
      .querySelectorAll(".invoice.clone")
      .forEach((node) => node.remove());

    // Clone invoice based on selected copies
    for (let i = 1; i < copies; i++) {
      const clone = invoice.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      invoice.after(clone);
    }

    window.print();

    // Cleanup cloned invoices after printing/cancelling
    document
      .querySelectorAll(".invoice.clone")
      .forEach((node) => node.remove());
  };

  return (
    <div className="no-print glass w-full max-w-2xl rounded-2xl p-6 transition-all">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Distribution</p>
          <p className="text-lg font-medium text-slate-900">How many copies do you need?</p>
        </div>

        <div className="flex gap-2 rounded-xl bg-slate-900/5 p-1 border border-slate-900/5">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setCopies(num)}
              className={`flex h-10 w-16 items-center justify-center rounded-lg text-sm font-bold transition-all ${copies === num
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                : "text-slate-500 hover:bg-slate-900/5 hover:text-slate-900"
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="group relative mt-8 w-full overflow-hidden rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold tracking-widest text-white shadow-xl shadow-slate-900/20 transition-all hover:scale-[1.01] active:scale-95"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          READY TO PRINT
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-all group-hover:h-full group-hover:bg-white/10"></div>
      </button>

      <p className="mt-4 text-center text-[10px] text-slate-500 uppercase tracking-widest">
        Optimized for standard A4 desktop printing
      </p>
    </div>
  );
}
