export default function PrintOptions() {
  return (
    <div className="no-print mt-4 w-full max-w-md rounded-lg border bg-white p-4 shadow">
      <p className="mb-2 font-medium">Select number of copies:</p>

      <div className="flex gap-4 text-sm">
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
    </div>
  );
}
