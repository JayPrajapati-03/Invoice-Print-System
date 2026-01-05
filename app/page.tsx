import Invoice from "@/components/Invoice";

type InvoiceType = {
  invoiceNumber: string;
  clientName: string;
  date: string;
  amount: string;
  description: string;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  const data = await res.json();

  const invoice: InvoiceType = {
    invoiceNumber: "INV-2026-001",
    clientName: "John Doe",
    date: "06-01-2026",
    amount: "₹12,500",
    description: data.title,
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Invoice invoice={invoice} />
    </main>
  );
}
