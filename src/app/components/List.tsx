import { v4 as uuidv4 } from "uuid";
import { ListProp } from "../types";
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
            <div className="my-5" key={uuidv4()}>
              <q className="ml-4">{item.example}</q>
            </div>
          )
      )}
    </>
  );
}
