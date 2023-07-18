"use client";
import { capitalizeFirstLetter } from "@/lib/utils";
import React, { useState } from "react";
import Meanings from "./Meanings";
import { spaceMono } from "@/lib/fonts";
import { Play, Speaker, LinkSVG } from "@/components/icons/index";

export default function WordResult({ word }: any) {
  const [isAudioHovered, setIsAudioHovered] = useState(false);

  const handleAudioEnterHover = () => {
    setIsAudioHovered(true);
  };

  const handleAudioLeaveHover = () => {
    setIsAudioHovered(false);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex mt-10 justify-between items-center">
          <div className="flex flex-col">
            <p className="text-6xl font-bold pb-4">
              {capitalizeFirstLetter(word?.word || "404")}
            </p>
            <button
              className="dark:hover:bg-slate-50/25 flex mt-2 gap-2 py-1 rounded-md items-center px-4 justify-between flex-row outline-0 bg-slate-50/5 hover:ring-1 hover:ring-amber-500"
              onMouseEnter={handleAudioEnterHover}
              onMouseLeave={handleAudioLeaveHover}
              onClick={async () => {
                let audioUrl = word.phonetics.filter((phonetic: any) => {
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
                if (!audioUrl[0]?.audio) {
                  alert("oops, no audio for this word!");
                }
              }}
            >
              <p
                className={` dark:text-amber-300 text-lg ${spaceMono.className} font-bold tracking-tight`}
              >
                {word?.phonetic || "No phonetic found"}
              </p>
              {isAudioHovered ? <Play /> : <Speaker />}
            </button>
          </div>
        </div>
        <div>
          <Meanings
            meanings={
              word?.meanings || [
                {
                  partOfSpeech: "verb",
                  definitions: [
                    {
                      definition: "Word Not Found.",
                      synonyms: [],
                      antonyms: [],
                    },
                  ],
                  synonyms: [],
                  antonyms: [],
                },
              ]
            }
          />
          <div className="flex flex-col w-inherit">
            <hr className="w-full border-line my-5 dark:border-darkGrayCustom" />
            <div className="flex items-center">
              <p className="text-grayCustom">
                Source
                <a href={word?.sourceUrls || "#"} target="_blank">
                  <span className="ml-3 sm:ml-10 dark:text-sky-700/85 text-sky-500 underline-offset-2 hover:underline decoration-grayCustom text-ellipsis flex gap-2">
                    <LinkSVG />
                    {word?.sourceUrls?.[0] || "Not Found"}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
