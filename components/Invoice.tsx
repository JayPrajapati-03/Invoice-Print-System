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
    <div className="invoice w-full max-w-md rounded-lg border bg-white p-6 shadow">
      <h1 className="mb-4 text-xl font-semibold">Invoice</h1>

      <div className="space-y-2 text-sm">
        <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
        <p><strong>Client Name:</strong> {invoice.clientName}</p>
        <p><strong>Date:</strong> {invoice.date}</p>
        <p><strong>Amount:</strong> {invoice.amount}</p>
        <p><strong>Description:</strong> {invoice.description}</p>
      </div>
    </div>
  );
}
