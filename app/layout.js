import "./globals.css";

export const metadata = {
  title: "AutoPad | Mobile First Dashboard Builder",
  description: "AutoPad is a self-service dashboard platform for mobile-first custom business dashboards, real-time analytics, and multi-source data visualization."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
