import Invoice from "@/components/Invoice";
import PrintOptions from "@/components/PrintOptions";

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
    clientName: "Jay Prajapati",
    date: "06-01-2026",
    amount: "₹12,500",
    description: data.title,
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-8 py-20">
      <div className="w-full max-w-2xl space-y-12">
        <Invoice invoice={invoice} />
        <PrintOptions />
      </div>
    </main>
  );
}
