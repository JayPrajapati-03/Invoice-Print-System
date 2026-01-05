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
    <div className="invoice w-full max-w-lg rounded-lg border bg-white p-6 shadow-sm">
      {/* Heading */}
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        Invoice
      </h1>

      {/* Invoice details */}
      <div className="space-y-4 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Invoice Number</span>
          <span>{invoice.invoiceNumber}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Client Name</span>
          <span>{invoice.clientName}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Date</span>
          <span>{invoice.date}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Amount</span>
          <span className="font-semibold text-black">
            {invoice.amount}
          </span>
        </div>

        {/* Description */}
        <div>
          <p className="mb-1 font-medium">Description</p>
          <p className="text-gray-600 leading-relaxed">
            {invoice.description}
          </p>
        </div>
      </div>
    </div>
  );
}
