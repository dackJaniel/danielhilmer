import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  name: string;
  type?: "primary" | "secondary" | "outline";
}

const ButtonLink = ({
  href = "/",
  name = "Klick",
  type = "primary",
}: IProps) => {
  return (
    <Link
      href={href}
      className={`px-6 py-1 rounded-full transition-colors flex flex-col items-center ${
        type === "primary"
          ? "border-2 border-transparent text-slate-100 bg-cyan-900 hover:bg-cyan-700"
          : type === "secondary"
          ? "border-2 border-transparent bg-slate-300 hover:bg-slate-200"
          : "border-2 border-cyan-900 bg-transparent hover:bg-cyan-900 hover:text-slate-100"
      }`}>
      {name}
    </Link>
  );
};

export default ButtonLink;
