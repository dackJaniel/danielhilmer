import MainHeader from "@/components/MainHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <div>Sprachen</div>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <Image src="" alt="" />
          </li>
          <li>
            <Image src="" alt="" />
          </li>
          <li>
            <Image src="" alt="" />
          </li>
        </ul>
      </main>
    </>
  );
}
