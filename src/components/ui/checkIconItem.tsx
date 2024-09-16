import React from "react";
import CheckIcon from "../icons/CheckIcon";

const CheckIconItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start gap-1">
      <span>
        <CheckIcon className="w-5 h-5 text-green-500" />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default CheckIconItem;
