import { ChartBarIcon, ClockIcon, PresentationChartLineIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import MetricCard from "./MetricCard";

const rows = [
  ["Revenue Operations", "Sales pipeline", "Live", "98%"],
  ["Finance", "Margin and cashflow", "Synced", "94%"],
  ["Leadership", "Executive KPI board", "Ready", "100%"]
];

export default function DashboardPreview() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-glow backdrop-blur">
      <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-blue-600">AutoPad OS</p>
          <h3 className="mt-1 text-xl font-bold text-slate-950">Decision Control Center</h3>
        </div>
        <div className="hidden rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 sm:block">Connected</div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="KPI Visibility" value="92%" change="+18% this quarter"><ChartBarIcon className="h-6 w-6" /></MetricCard>
        <MetricCard label="Decision Speed" value="3.4x" change="Faster reporting"><ClockIcon className="h-6 w-6" /></MetricCard>
        <MetricCard label="Active Dashboards" value="28" change="Across 6 teams"><PresentationChartLineIcon className="h-6 w-6" /></MetricCard>
        <MetricCard label="Data Quality" value="99.1%" change="Automated checks"><ShieldCheckIcon className="h-6 w-6" /></MetricCard>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-slate-950">Performance overview</h4>
            <span className="text-sm text-slate-500">Last 12 months</span>
          </div>
          <div className="mt-6 flex h-56 items-end gap-3 rounded-2xl bg-slate-50 p-4">
            {[35, 48, 42, 62, 58, 76, 68, 84, 72, 88, 80, 96].map((h, i) => (
              <div key={i} className="flex flex-1 items-end">
                <div className="w-full rounded-t-xl bg-gradient-to-t from-blue-700 to-cyan-400" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="border-b border-slate-100 p-5">
            <h4 className="font-semibold text-slate-950">KPI systems</h4>
            <p className="mt-1 text-sm text-slate-500">Designed around each company's workflow.</p>
          </div>
          <div className="divide-y divide-slate-100">
            {rows.map(([team, system, status, score]) => (
              <div key={team} className="grid grid-cols-[1fr_auto] gap-4 p-5">
                <div>
                  <p className="font-medium text-slate-900">{team}</p>
                  <p className="text-sm text-slate-500">{system}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">{score}</p>
                  <p className="text-xs text-slate-500">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
