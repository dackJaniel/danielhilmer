import Image from "next/image";
import React from "react";

const Language = () => {
  const wh = 50;
  return (
    <>
      <div>Sprachen</div>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <Image src="./icons/html.svg" alt="" width={wh} height={wh} />
        </li>
        <li>
          <Image src="./icons/css.svg" alt="" width={wh} height={wh} />
        </li>
        <li>
          <Image src="./icons/js.svg" alt="" width={wh} height={wh} />
        </li>
        <li>
          <Image src="./icons/nextjs.svg" alt="" width={wh} height={wh} />
        </li>
        <li>
          <Image src="./icons/nodejs.svg" alt="" width={wh} height={wh} />
        </li>
      </ul>
    </>
  );
};

export default Language;
