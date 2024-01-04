import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-slate-100 w-full shadow-md py-2">
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <div>Logo</div>
        <ul className="flex items-center">
          <li>
            <Link href="">Projekte</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
