import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  name: string;
}

const ButtonLink = ({ href = "/", name = "Klick" }: IProps) => {
  return (
    <Link
      href={href}
      className="px-6 py-2 inline-block bg-cyan-900 hover:bg-cyan-700 text-slate-100 rounded-md transition-colors">
      {name}
    </Link>
  );
};

export default ButtonLink;
