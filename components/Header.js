"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" }
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const logoSrc = darkMode ? "/images/logolight.png" : "/images/logodark.png";
  const selectedLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("autopad-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleDarkMode() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("autopad-theme", next ? "dark" : "light");
  }

  function selectLanguage(code) {
    setLanguage(code);
    setLanguageMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="AutoPad home">
          <Image
            src={logoSrc}
            alt="AutoPad"
            width={500}
            height={86}
            priority
            className="h-auto w-[220px] sm:w-[240px]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <a href="#solution" className="hover:text-blue-600 dark:hover:text-cyan-300">Solution</a>
          <a href="#features" className="hover:text-blue-600 dark:hover:text-cyan-300">Features</a>
          <a href="#benefits" className="hover:text-blue-600 dark:hover:text-cyan-300">Benefits</a>
          <a href="#process" className="hover:text-blue-600 dark:hover:text-cyan-300">Process</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <div className="relative" title={selectedLanguage.label}>
            <button
              type="button"
              onClick={() => setLanguageMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl leading-none shadow-sm transition hover:border-blue-200 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:focus:border-cyan-400"
              aria-label="Select language"
              aria-expanded={languageMenuOpen}
            >
              <span aria-hidden="true">{selectedLanguage.flag}</span>
            </button>

            {languageMenuOpen ? (
              <div className="absolute right-0 mt-2 grid gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => selectLanguage(item.code)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-xl leading-none transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                    aria-label={item.label}
                  >
                    <span aria-hidden="true">{item.flag}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <a href="#contact" className="hidden rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-700 lg:inline-flex">Request a Demo</a>
        </div>
      </div>
    </header>
  );
}
