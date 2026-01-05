type Invoice = {
  invoiceNumber: string;
  clientName: string;
  date: string;
  amount: string;
  description: string;
};

export default async function Page() {
  // API integration (as per instructions)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  const data = await res.json();

  // Fake invoice data (allowed by task)
  const invoice: Invoice = {
    invoiceNumber: "INV-2026-001",
    clientName: "John Doe",
    date: "06-01-2026",
    amount: "₹12,500",
    description: data.title,
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow">
        <h1 className="mb-4 text-xl font-semibold">Invoice</h1>

        <div className="space-y-2 text-sm">
          <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
          <p><strong>Client Name:</strong> {invoice.clientName}</p>
          <p><strong>Date:</strong> {invoice.date}</p>
          <p><strong>Amount:</strong> {invoice.amount}</p>
          <p><strong>Description:</strong> {invoice.description}</p>
        </div>
      </div>
    </main>
  );
}
