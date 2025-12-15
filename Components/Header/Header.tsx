"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    setTheme(systemTheme);
    document.documentElement.setAttribute("data-theme", systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="body-font w-full">
      <div className="container mx-auto flex flex-row items-center justify-between mt-5 p-5">

        <h1 className="text-5xl font-bold whitespace-nowrap">
          Javeria Sharif
        </h1>

        <nav className="flex items-center gap-6 whitespace-nowrap">

          <Link href="#" className="font-medium">Home</Link>
          <Link href="#Qualifications" className="font-medium">About</Link>
          <Link href="#Projects" className="font-medium">Projects</Link>
          <Link href="#Contact" className="font-medium">Contact</Link>

          <button
  onClick={toggleTheme}
  className="ml-6 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold 
              transition-colors duration-300 flex items-center gap-2"
>
  <span>Dark</span> / <span>Light</span>
</button>



        </nav>
      </div>
    </header>
  );
}
