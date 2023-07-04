import { v4 as uuidv4 } from "uuid";
import { ListProp } from "../types";
import { merriweather } from "../fonts";

export default function List({ list }: ListProp) {
  return (
    <>
      <ul className="ml-10 list-disc space-y-1 marker:text-slate-50/50">
        {list.map((item: any, index: any) => (
          <li className="mt-3" key={uuidv4()}>
            {item.definition}
          </li>
        ))}
      </ul>
      {list.map(
        (item: any) =>
          item.example && (
            <div className="my-4 tracking-tight" key={uuidv4()}>
              <q className={`${merriweather.className} font-thin`}>
                {item.example}
              </q>
            </div>
          )
      )}
    </>
  );
}
