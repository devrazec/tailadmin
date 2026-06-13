export default function MetricCard({ label, value, change, children }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{value}</p>
        </div>
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">{children}</div>
      </div>
      <p className="mt-4 text-sm font-medium text-emerald-600">{change}</p>
    </div>
  );
}
