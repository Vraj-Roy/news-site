import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="flex gap-x-8 font-bold text-2xl ml-10 p-4">
        <Link href="/">
          <div>News</div>
        </Link>
        <Link href="/general">
          <div>general</div>
        </Link>
        <Link href="/Sports">
          <div>Sports</div>
        </Link>
        <Link href="/science">
          <div>science </div>
        </Link>
        <Link href="/">
          <div>business </div>
        </Link>
        <Link href="/health">
          <div>health </div>
        </Link>
        <Link href="/entertainment">
          <div>entertainment </div>
        </Link>
        <Link href="/tech">
          <div>tech </div>
        </Link>
        <Link href="/politics">
          <div>politics </div>
        </Link>
        <Link href="/food">
          <div>food </div>
        </Link>
        <Link href="/travel">
          <div>travel </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
