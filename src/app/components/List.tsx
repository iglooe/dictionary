import { v4 as uuidv4 } from "uuid";
interface Prop {
  list: Array<Object>;
}
export default function List({ list }: Prop) {
  return (
    <>
      <ul className="ml-10 list-disc marker:text-purpleCustom">
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
              <q className="ml-10 dark:text-grayCustom">{item.example}</q>
            </div>
          )
      )}
    </>
  );
}
