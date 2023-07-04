"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Meanings from "@/components/Meanings";
import { lato, spaceMono } from "@/lib/fonts";

export default function Search() {
  // https://api.dictionaryapi.dev/api/v2/entries/en/keyboard

  const inputElement = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [isAudioHovered, setIsAudioHovered] = useState(false);

  const handleAudioEnterHover = () => {
    setIsAudioHovered(true);
  };

  const handleAudioLeaveHover = () => {
    setIsAudioHovered(false);
  };

  const handleButtonClick = (searchTerm: any) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => {
        const json: any = response.json();
        if (response.status == 404) {
          setError(true);
          return json;
        }
        setError(false);

        return json;
      })
      .then((json) => {
        setResult(json);
      })
      .catch((err) => {
        setResult(err);
      });
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

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /*
    persistent svg color
  */
  const theme = useTheme().theme;

  const getFillColor = () => {
    return theme === "light" ? "#1c1b22" : "#fff";
  };

  const getOppositeFillColor = () => {
    return theme === "light" ? "#fff" : "#1c1b22";
  };

  return (
    <main className={`w-full pt-4 dark:text-white ${lato.className}`}>
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
        <div className="mb-10">
          <div className="flex mt-10 justify-between items-center">
            <div className="flex flex-col">
              <p className="text-6xl font-bold pb-4">
                {capitalizeFirstLetter(result[0].word)}
              </p>
              <button
                className="hover:bg-slate-50/25 flex mt-2 gap-2 py-1 rounded-md items-center px-4 justify-between flex-row outline-0 bg-slate-50/5 hover:ring-1 hover:ring-amber-500"
                onMouseEnter={handleAudioEnterHover}
                onMouseLeave={handleAudioLeaveHover}
                onClick={async () => {
                  let audioUrl = result[0].phonetics.filter((phonetic: any) => {
                    if (phonetic.audio && phonetic.audio.length > 0) {
                      return phonetic.audio;
                    }
                  });
                  if (audioUrl[0]?.audio) {
                    let audio = new Audio(audioUrl[0].audio);
                    if (audio) {
                      audio.play();
                      setIsAudioHovered(true);
                      audio.addEventListener("ended", () => {
                        setIsAudioHovered(false);
                      });
                    }
                  }
                }}
              >
                <p
                  className={`text-amber-500 text-lg ${spaceMono.className} font-bold tracking-tight`}
                >
                  {result[0].phonetic}
                </p>
                {isAudioHovered ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={getFillColor()}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={getFillColor()}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <Meanings meanings={result[0].meanings} />
            <div className="flex flex-col w-inherit">
              <hr className="w-full border-line my-5 dark:border-darkGrayCustom" />
              <div className="flex items-center">
                <p className="text-grayCustom">
                  Source
                  <a href={result[0].sourceUrls} target="_blank">
                    <span className="ml-3 sm:ml-10 dark:text-white text-black underline-offset-2 hover:underline decoration-grayCustom text-ellipsis flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#06b6d4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      {result[0].sourceUrls[0]}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
}
