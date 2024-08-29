"use client";
import Link from "next/link";
import React, { useState } from "react";

import ThemeToggle from "./ThemeLogic";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-x-8 font-bold text-xl p-4 justify-around shadow-md shadow-red-300">
        <Link href="/">News</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/science">Science</Link>
        <Link href="/business">Business</Link>
        <Link href="/health">Health</Link>
        <Link href="/entertainment">Entertainment</Link>
        <Link href="/tech">Tech</Link>
        <Link href="/politics">Politics</Link>
        <Link href="/travel">Travel</Link>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center p-4 justify-between">
        <Link href={"/"}>
          <span className="text-xl font-bold">News</span>
        </Link>
        <div className="flex items-center gap-x-2">
          <ThemeToggle />
          <div className="space-y-2 cursor-pointer" onClick={toggleNav}>
            <span
              className={`block w-8 navSpan    h-0.5 bg-black transition-transform ${
                navOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 navSpan    h-0.5 bg-black transition-opacity ${
                navOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 navSpan    h-0.5 bg-black transition-transform ${
                navOpen ? "transform -rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          navOpen ? "flex" : "hidden"
        } flex-col items-center gap-y-6 font-bold text-xl p-4 shadow-lg shadow-red-300 md:hidden rounded-br-md rounded-bl-md`}
      >
        <Link href="/sports" onClick={toggleNav}>
          Sports
        </Link>
        <Link href="/science" onClick={toggleNav}>
          Science
        </Link>
        <Link href="/business" onClick={toggleNav}>
          Business
        </Link>
        <Link href="/health" onClick={toggleNav}>
          Health
        </Link>
        <Link href="/entertainment" onClick={toggleNav}>
          Entertainment
        </Link>
        <Link href="/tech" onClick={toggleNav}>
          Tech
        </Link>
        <Link href="/politics" onClick={toggleNav}>
          Politics
        </Link>
        <Link href="/travel" onClick={toggleNav}>
          Travel
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
