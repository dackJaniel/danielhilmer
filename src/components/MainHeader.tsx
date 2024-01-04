import React from "react";
import ButtonLink from "./ButtonLink";

const MainHeader = () => {
  return (
    <header className="w-full h-[80vh] flex flex-col items-center">
      <h1>Daniel Hilmer</h1>
      <p>Lorem ipsum dolor sit.</p>
      <ButtonLink />
    </header>
  );
};

export default MainHeader;
