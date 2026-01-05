"use client";

export default function PrintOptions() {
  const handlePrint = () => {
    const selected = document.querySelector(
      'input[name="copies"]:checked'
    ) as HTMLInputElement | null;

    const copies = selected ? Number(selected.value) : 1;

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
  };

  return (
    <div className="no-print w-full max-w-lg rounded-lg border bg-white p-4 shadow-sm">
      <p className="mb-2 font-medium">Select number of copies:</p>

      <div className="mb-4 flex gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="radio" name="copies" value="1" defaultChecked />
          1 Copy
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="copies" value="2" />
          2 Copies
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="copies" value="3" />
          3 Copies
        </label>
      </div>

      <button
        onClick={handlePrint}
        className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Print Invoice
      </button>
    </div>
  );
}
