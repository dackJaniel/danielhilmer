import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  name: string;
  primary?: boolean;
}

const ButtonLink = ({
  href = "/",
  name = "Klick",
  primary = false,
}: IProps) => {
  return (
    <Link
      href={href}
      className={`px-6 py-2 inline-block rounded-md transition-colors ${
        primary
          ? "text-slate-100 bg-cyan-900 hover:bg-cyan-700"
          : "bg-slate-300 hover:bg-slate-200"
      }`}>
      {name}
    </Link>
  );
};

export default ButtonLink;
