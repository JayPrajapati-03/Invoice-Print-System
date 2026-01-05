"use client";

export default function PrintOptions() {
  const handlePrint = () => {
    // Read selected number of copies (native HTML state)
    const selected = document.querySelector(
      'input[name="copies"]:checked'
    ) as HTMLInputElement | null;

    const copies = selected ? Number(selected.value) : 1;

    // Store copies count on body (for later use)
    document.body.setAttribute("data-copies", copies.toString());

    // Trigger browser print
    window.print();
  };

  return (
    <div className="no-print mt-4 w-full max-w-md rounded-lg border bg-white p-4 shadow">
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
        className="w-full rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
      >
        Print Invoice
      </button>
    </div>
  );
}
