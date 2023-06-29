"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // query
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <>
      <main className="flex flex-col items-center justify-between p-12">
        <div className="mx-10 block md:w-[48rem] w-full">
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
        </div>
      </main>
    </>
  );
}
