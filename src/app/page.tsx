"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function Home() {
  // mobile menu
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  // theme
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const getFillColor = () => {
    return theme === "light" ? "#1c1b22" : "#fff";
  };

  // query
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="w-full mx-auto bg-transparent border-b 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto bg-transparent md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
              href="/"
            >
              <span className="lg:text-lg uppercase focus:ring-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={getFillColor()}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
            </a>
            <button
              onClick={toggleOpen}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path
                  className={!open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col items-center flex-grow ${
              open ? "" : "hidden"
            } md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <div className="inline-flex items-center gap-2 list-none">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold bg-none rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:outline active:bg-gray-400 active:text-white focus-visible:outline-black"
              >
                {theme === "light" ? (
                  <>
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
                      id="moon"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </>
                ) : (
                  <>
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
                      id="sun"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
      <main className="flex flex-col items-center justify-between p-12">
        <div className="mx-10 block md:w-[48rem] w-full">
          <form method="GET" action="/dictionary">
            <div className="relative">
              <button type="button" onClick={() => router.push(`/${query}`)}>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
              <input
                type="text"
                className="w-full py-2 pl-4 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
