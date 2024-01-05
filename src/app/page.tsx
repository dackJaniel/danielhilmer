import Language from "@/components/Language";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <Language />
      </main>
    </>
  );
}
