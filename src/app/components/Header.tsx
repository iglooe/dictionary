"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { inter } from "@/lib/fonts";
import { HeroIcon, Menu, Moon, Sun, GithubSVG } from "@/components/icons/index";
import Search from "./Search";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  // theme
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`${inter.className} w-full mx-auto bg-transparent border-b 2xl:max-w-7xl`}
      >
        <div className="relative flex flex-col w-full p-5 mx-auto bg-transparent md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <span className="lg:text-lg uppercase focus:ring-0">
                <HeroIcon />
              </span>
            </a>

            <button
              onClick={toggleOpen}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
            >
              <Menu />
            </button>
          </div>
          <nav
            className={`flex-col items-center flex-grow ${
              open ? "" : "hidden"
            } md:pb-0 md:flex md:justify-end md:flex-row mx-auto px-4 border-r border-l border-gray-200/10 md:border-0 md:shadow-none`}
          >
            <div className="md:inline-flex flex-row flex items-center gap-2 list-none ">
              <div className="flex items-center justify-center">
                <Search />
              </div>
              <button
                onClick={toggleTheme}
                className="inline-flex px-3 py-3 text-sm font-semibold bg-none rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-neutral-200/20 active:bg-gray-400 active:text-white focus-visible:outline-black"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
              <a
                rel="noopener noreferrer"
                href="https://github.com/iglooe/dictionary"
                className="inline-flex px-3 py-3 bg-none rounded-full group hover:{} focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-sky-500/20 active:bg-gray-400 active:text-white focus-visible:outline-black"
              >
                <div className="flex items-center">
                  <GithubSVG />
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

// export function HomeNav = () => {
//   return
//   <main className={`w-full dark:text-white ${lato.className}`}>
//       <form
//         className="flex items-center"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <div className="relative w-full">
//           <input
//             type="text"
//             className={`bg-lightGrayCustom bg-opacity-50 text-gray-900 text-lg rounded-lg ${
//               isEmpty ? "ring-red-500" : "focus:ring-purpleCustom"
//             }  focus:outline-none focus:ring-1 block w-full p-5  dark:bg-darkBlackCustom dark:placeholder-gray-400 dark:text-white caret-purpleCustom font-bold`}
//             placeholder="Search for any word..."
//             ref={inputElement}
//             onChange={(e) => {
//               setIsEmpty(false);
//               setSearchTxt(e.target!.value);
//             }}
//           />

//           <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={getFillColor()}
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//             </svg>
//           </div>
//         </div>
//       </form>
//       <p className={`text-red-500 ${isEmpty ? "block" : "hidden"}`}>
//         Nice try bucko
//       </p>
//       {error ? (
//         <div className="flex flex-col justify-center items-center mt-28">
//           <Image
//             alt="search icon"
//             width={1000}
//             height={1000}
//             src={"./images/sad-face.png"}
//             className="w-20 h-20 select-none"
//           />
//           <p className="mt-10 text-lg font-bold">{result?.title}</p>
//           <p className="mt-10 text-grayCustom text-center">
//             {result?.message} {result?.resolution}
//           </p>
//         </div>
//       ) : result && !error ? (
//         <WordResult word={result[0]} />
//       ) : (
//         <div></div>
//       )}
//     </main>
//       }
