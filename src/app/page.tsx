"use client";
import Header from "./components/Header";
import Search from "./components/Search";
import { useEffect, useState } from "react";

import { Inter, Inconsolata, Lora } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [fontIndex, setFontIndex] = useState(1);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <div
        className={`${
          isMenuOpened ? "" : "hidden"
        } w-[100vw] h-[100vh] fixed z-20`}
        onClick={() => {
          setIsMenuOpened(false);
        }}
      ></div>

      <div
        className={`mx-5 sm:mx-20 lg:mx-32 xl:mx-96 sm:pt-5 lg:pt-10 ${
          fontIndex == 1
            ? inter.className
            : fontIndex == 2
            ? lora.className
            : inconsolata.className
        }`}
      >
        <Header />
      </div>
    </>
  );
}
