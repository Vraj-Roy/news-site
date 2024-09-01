// components/ThemeToggle.js

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        {theme === "light" && (
          <Image
            width={30}
            height={30}
            className="transition-all"
            src="/light.svg"
            alt=""
          />
        )}
        {theme === "dark" && (
          <Image
            width={30}
            height={30}
            className="transition-all"
            src="dark.svg"
            alt=""
          />
        )}
        {/* <div className="w-11 h-6 bg-gray-300 rounded-full dark:bg-gray-700"></div> */}
        {/* <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform dark:translate-x-5"></div> */}
      </label>
    </div>
  );
};

export default ThemeToggle;
