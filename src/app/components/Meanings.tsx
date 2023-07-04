import List from "./List";
import { v4 as uuidv4 } from "uuid";
import { MeaningProp } from "../types";
import { inter, spaceMono } from "../fonts";

export default function Meanings({ meanings }: MeaningProp) {
  return (
    <div className={inter.className}>
      {meanings.map((meaning: any) => (
        <div key={uuidv4()}>
          <div className="flex items-center mt-4">
            <p className="italic font-bold text-fuchsia-400">
              {meaning?.partOfSpeech}
            </p>
            <hr className="w-full border-line ml-5 dark:border-slate-200/80" />
          </div>
          <p className="text-grayCustom  text-lg mt-8">Meaning</p>
          <List list={meaning?.definitions} />
          <div
            className={
              meaning?.synonyms.length > 0 || meaning?.antonyms.length > 0
                ? "my-8"
                : ""
            }
          >
            {meaning?.synonyms.length > 0 && (
              <p className="text-lime-400 flex py-2 items-center flex-wrap font-semibold">
                Synonyms
                {meaning?.synonyms.map((item: any) => (
                  <span
                    key={uuidv4()}
                    className={`${spaceMono.className} font-normal ml-4 text-white inline-block bg-gradient-to-b from-transparent to-gray-600/20 px-2 py-2 rounded-full border border-gray-600/10`}
                  >
                    {item}
                  </span>
                ))}
              </p>
            )}
            {meaning?.antonyms.length > 0 && (
              <p className="text-red-500">
                Antonyms
                {meaning?.antonyms.map((item: any) => (
                  <span
                    key={uuidv4()}
                    className="text-purpleCustom font-bold ml-5 inline-block"
                  >
                    {item}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
