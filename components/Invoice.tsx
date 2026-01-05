export default function Invoice({ invoice }: any) {
  return (
    <div className="invoice w-full max-w-lg rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">
        Invoice
      </h1>

      <div className="space-y-3 text-sm text-gray-700">
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

        <div>
          <p className="font-medium mb-1">Description</p>
          <p className="text-gray-600">
            {invoice.description}
          </p>
        </div>
      </div>
    </div>
  );
}
