import List from "./List";
import { v4 as uuidv4 } from "uuid";
interface Prop {
  meanings: Array<Object>;
}

export default function Meanings({ meanings }: Prop) {
  return (
    <div>
      {meanings.map((meaning: any) => (
        <div key={uuidv4()}>
          <div className="flex items-center mt-10">
            <p className="italic font-bold text-2xl">{meaning?.partOfSpeech}</p>
            <hr className="w-full border-line ml-5 dark:border-darkGrayCustom" />
          </div>
          <p className="text-grayCustom  text-lg mt-8">Meaning</p>
          <List list={meaning?.definitions} />
          <div
            className={
              meaning?.synonyms.length > 0 || meaning?.antonyms.length > 0
                ? "my-10"
                : ""
            }
          >
            {meaning?.synonyms.length > 0 && (
              <p className="text-grayCustom">
                Synonyms
                {meaning?.synonyms.map((item: any) => (
                  <span
                    key={uuidv4()}
                    className="text-purpleCustom font-bold ml-5 inline-block"
                  >
                    {item}
                  </span>
                ))}
              </p>
            )}
            {meaning?.antonyms.length > 0 && (
              <p className="text-grayCustom">
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
