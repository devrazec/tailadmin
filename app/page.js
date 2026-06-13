import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  Squares2X2Icon,
  TableCellsIcon
} from "@heroicons/react/24/outline";

const dataSources = [
  "REST APIs",
  "Google Sheets",
  "Excel Files",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "Oracle",
  "SQLite",
  "CSV Files",
  "Custom Data Sources"
];

const featureSections = [
  {
    eyebrow: "Connect All Your Data Sources",
    title: "Integrate with the tools you already use.",
    text: "Data is automatically synchronized and stored for fast dashboard performance.",
    Icon: CircleStackIcon,
    items: dataSources
  },
  {
    eyebrow: "Mobile-First Dashboard Experience",
    title: "Designed from the ground up for smartphones, tablets, and desktops.",
    text: "Access critical business information anytime, anywhere, with dashboard software built for field teams and executives on the go.",
    Icon: DevicePhoneMobileIcon,
    items: ["Responsive layouts", "Touch-friendly widgets", "Fast loading performance", "Optimized mobile views"]
  },
  {
    eyebrow: "Fully Personalized Dashboards",
    title: "Every user can create a workspace that matches their needs.",
    text: "No developer assistance required. Users control the layout, widgets, and dashboard views that help them work faster.",
    Icon: Squares2X2Icon,
    items: ["Add widgets", "Remove widgets", "Rearrange components", "Resize panels", "Save custom layouts", "Create multiple dashboard views"]
  },
  {
    eyebrow: "Powerful Visualizations",
    title: "Transform raw data into meaningful insights.",
    text: "Built-in visualization best practices help users understand data faster and make better decisions.",
    Icon: ChartBarIcon,
    items: ["Line Charts", "Bar Charts", "Pie Charts", "Gauge Indicators", "KPI Cards", "Data Tables", "Trend Analysis", "Performance Metrics"]
  },
  {
    eyebrow: "Real-Time and Scheduled Data Refresh",
    title: "Always work with up-to-date information.",
    text: "Keep your team informed with the latest available data through live connections, scheduled updates, and background synchronization.",
    Icon: ArrowPathIcon,
    items: ["Live data connections", "Automatic scheduled updates", "Manual refresh", "Background synchronization"]
  }
];

const benefits = [
  ["Save Time", "Eliminate manual reporting and spreadsheet consolidation."],
  ["Gain Visibility", "See all your key metrics in a single dashboard."],
  ["Make Better Decisions", "Identify trends, opportunities, and issues faster."],
  ["Improve Productivity", "Give teams direct access to the information they need."],
  ["Scale Easily", "Add new data sources and dashboards as your business grows."]
];

const steps = [
  ["Connect Your Data", "Configure APIs, spreadsheets, or databases."],
  ["Build Your Dashboard", "Select widgets and arrange them however you like."],
  ["Analyze and Act", "Monitor KPIs, identify trends, and make informed decisions."]
];

const useCases = [
  ["Sales Teams", "Track revenue, opportunities, and pipeline performance."],
  ["Operations", "Monitor productivity, processes, and service levels."],
  ["Finance", "Visualize financial performance and cash flow."],
  ["Marketing", "Measure campaign performance and customer engagement."],
  ["Executives", "Get a real-time overview of business performance."]
];

const seoPhrases = [
  "Mobile First Dashboard",
  "Custom Business Dashboards",
  "Self-Service Dashboard Platform",
  "Dashboard Builder",
  "Real-Time Analytics Dashboard",
  "Data Visualization Platform",
  "API Dashboard",
  "Database Dashboard",
  "Spreadsheet Dashboard",
  "KPI Dashboard",
  "Business Intelligence Dashboard",
  "Interactive Data Visualization",
  "Dashboard Software",
  "Executive Dashboard",
  "Operational Dashboard"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pt-[77px]">
      <Header />

      <section id="top" className="gradient-grid relative border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 pb-20 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:pb-28">
          <div>
            <span className="badge">Mobile First Dashboard Builder</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Build Your Own Dashboard. Your Data. Your Way.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Connect data from APIs, spreadsheets, and databases to create personalized dashboards that work on any device.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Empower every user to design their own experience by adding, removing, and arranging widgets exactly how they want. Visualize business metrics with charts, gauges, tables, and KPIs, all from a single platform.
            </p>
            <p className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">Connect. Visualize. Analyze. Act.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white shadow-glow hover:bg-blue-700">
                Request a Demo <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-800 shadow-soft hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300">
                Start Building Your Dashboard
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              {["API Dashboard", "Spreadsheet Dashboard", "Database Dashboard"].map((item) => (
                <div key={item} className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-500" />{item}</div>
              ))}
            </div>
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-blue-600">Main Value Proposition</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Turn Data Into Actionable Insights</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>Stop switching between spreadsheets, reports, and multiple systems.</p>
            <p>Our self-service dashboard platform automatically collects data from your existing sources and transforms it into interactive data visualization designed for real-world decision making.</p>
            <p>Whether your data lives in APIs, databases, or spreadsheets, you can bring everything together in one place and gain a complete view of your business.</p>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-blue-600 dark:text-cyan-300">Features</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Custom Business Dashboards without enterprise BI complexity.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              AutoPad focuses on mobile-first, self-service customization, simple multi-source integration, and fast dashboard performance.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featureSections.map(({ eyebrow, title, text, Icon, items }) => (
              <article key={eyebrow} className="card p-7 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-6 inline-flex rounded-lg bg-blue-50 p-4 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300"><Icon className="h-7 w-7" /></div>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-blue-600 dark:text-cyan-300">{eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-blue-600">Benefits</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Why Choose Our Dashboard Platform?</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(([title, text]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <CheckCircleIcon className="h-6 w-6 text-emerald-500" />
                <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">How It Works</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">Three Simple Steps</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(([title, text], index) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold">{index + 1}</div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-blue-600">Use Cases</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Perfect For</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <PresentationChartLineIcon className="h-7 w-7 text-blue-600 dark:text-cyan-300" />
              <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Dashboard software keywords" className="border-y border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 lg:px-8">
          {seoPhrases.map((phrase) => (
            <span key={phrase} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{phrase}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-glow md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.22em] text-blue-50">Final CTA</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">Ready to Transform Your Data Into Insights?</h2>
              <p className="mt-4 max-w-2xl text-lg text-blue-50">Create personalized dashboards that connect all your data sources and deliver the information your team needs, wherever they are.</p>
            </div>
            <a href="mailto:hello@autopad.app?subject=AutoPad%20dashboard%20demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-blue-700 shadow-soft hover:bg-blue-50">
              Book a Demo Today <CursorArrowRaysIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
