"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { lato } from "@/lib/fonts";
import WordResult from "./Word";
import { useRouter } from "next/navigation";

export default function Search() {
  // https://api.dictionaryapi.dev/api/v2/entries/en/keyboard

  const inputElement = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleButtonClick = (searchTerm: any) => {
    router.push(`/w/${searchTerm}`, `/w/[word]`);
  };

  useEffect(() => {
    const element = inputElement.current;
    if (!element) return;

    element.addEventListener("focusout", (event) => {
      setIsEmpty(false);
    });
    element.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        setResult(null);
        setError(false);
        if ((event.target as HTMLInputElement).value === "") setIsEmpty(true);
        else {
          (event.target as HTMLInputElement).blur();
          setIsEmpty(false);
          if (!(event.target as HTMLInputElement).value.trim()) {
            setIsEmpty(true);
            (event.target as HTMLInputElement).value = "";
          } else {
            handleButtonClick((event.target as HTMLInputElement).value);
          }
        }
      }
    });
  }, []);

  // Below condition is good for setting setError to false but the setResult null not working!
  if (searchTxt == "" && result) {
    setResult(null);
  }
  if (searchTxt == "" && error) {
    setError(false);
  }

  /*
    persistent svg color
  */
  const theme = useTheme().theme;

  const getFillColor = () => {
    return theme === "light" ? "#1c1b22" : "#fff";
  };

  return (
    <main className={`w-full dark:text-white ${lato.className}`}>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="relative w-full">
          <input
            type="text"
            className={`bg-lightGrayCustom bg-opacity-50 text-gray-900 text-lg rounded-lg ${
              isEmpty ? "ring-red-500" : "focus:ring-purpleCustom"
            }  focus:outline-none focus:ring-1 block w-full p-5  dark:bg-darkBlackCustom dark:placeholder-gray-400 dark:text-white caret-purpleCustom font-bold`}
            placeholder="Search for any word..."
            ref={inputElement}
            onChange={(e) => {
              setIsEmpty(false);
              setSearchTxt(e.target!.value);
            }}
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={getFillColor()}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </form>
      <p className={`text-red-500 ${isEmpty ? "block" : "hidden"}`}>
        Nice try bucko
      </p>
      {error ? (
        <div className="flex flex-col justify-center items-center mt-28">
          <Image
            alt="search icon"
            width={1000}
            height={1000}
            src={"./images/sad-face.png"}
            className="w-20 h-20 select-none"
          />
          <p className="mt-10 text-lg font-bold">{result?.title}</p>
          <p className="mt-10 text-grayCustom text-center">
            {result?.message} {result?.resolution}
          </p>
        </div>
      ) : result && !error ? (
        <WordResult word={result[0]} />
      ) : (
        <div></div>
      )}
    </main>
  );
}
