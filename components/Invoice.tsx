import Image from "next/image";

type InvoiceProps = {
  invoice: {
    invoiceNumber: string;
    clientName: string;
    date: string;
    amount: string;
    description: string;
  };
};

export default function Invoice({ invoice }: InvoiceProps) {
  return (
    <div className="invoice glass w-full max-w-2xl overflow-hidden rounded-2xl p-0 transition-all hover:shadow-2xl">
      {/* Dynamic Header with Gradient */}
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">VISTA PRINTS</h2>
            <p className="text-xs text-slate-400">Professional Printing Services</p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-black uppercase tracking-widest opacity-20">INVOICE</h1>
          <p className="text-sm font-medium text-indigo-400">{invoice.invoiceNumber}</p>
        </div>
      </div>

      {/* Invoice Content */}
      <div className="relative p-8 px-10">
        {/* Subtle Watermark */}
        <div className="watermark pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08] print:opacity-[0.1]">
          <span className="rotate-[-30deg] text-9xl font-black text-slate-900">PAID</span>
        </div>

        <div className="grid grid-cols-2 gap-12 border-b border-white/5 pb-8 mb-8">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Bill To</p>
            <p className="text-lg font-semibold text-slate-900">{invoice.clientName}</p>
            <p className="mt-1 text-sm text-slate-500">Valued Customer</p>
          </div>
          <div className="text-right">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Issued On</p>
            <p className="text-lg font-semibold text-slate-900">{invoice.date}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Service Description</p>
            <div className="rounded-xl bg-slate-900/[0.03] p-4 border border-slate-900/[0.05]">
              <p className="text-sm leading-relaxed text-slate-700 italic">
                "{invoice.description}"
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between pt-4 border-t border-white/5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Payment Status</p>
              <span className="mt-1 inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                Processed
              </span>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Amount</p>
              <p className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-4xl font-black text-transparent print:text-black">
                {invoice.amount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50"></div>
    </div>
  );
}
