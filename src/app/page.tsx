"use client";
import Header from "./components/Header";
import Search from "./components/Search";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Inter, Inconsolata, Lora } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [checked, setChecked] = useState(
    currentTheme === "dark" ? true : false
  );

  const [fontIndex, setFontIndex] = useState(1);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const fontIndexChangeHandler = (index: number) => {
    setFontIndex(index);
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const clickHandler = () => {
    setChecked(!checked);
    setTheme(!checked ? "dark" : "light");
  };

  const fontChangeHandler = () => {
    setIsMenuOpened(!isMenuOpened);
  };

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
        <Header
          checked={checked}
          onClick={clickHandler}
          fontIndex={fontIndex}
          fontIndexChangeHandler={fontIndexChangeHandler}
          isMenuOpened={isMenuOpened}
          fontChangeHandler={fontChangeHandler}
        />
        <Search />
      </div>
    </>
  );
}
