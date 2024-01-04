import Link from "next/link";
import React from "react";

const ButtonLink = () => {
  return (
    <Link
      href="/"
      className="px-6 py-2 inline-block bg-cyan-900 hover:bg-cyan-700 text-slate-100 rounded-full transition-colors">
      Button
    </Link>
  );
};

export default ButtonLink;
