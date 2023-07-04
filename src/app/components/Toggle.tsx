import { MouseEventHandler } from "react";

interface Prop {
  onClick: MouseEventHandler<HTMLDivElement>;
  checked: boolean | undefined;
  className: string | undefined;
}
export default function Toggle({ onClick, checked, className }: Prop) {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <input type="checkbox" checked={checked} readOnly className="sr-only" />
      <div className="block bg-grayCustom dark:bg-purpleCustom h-5 w-[2.08rem] rounded-full"></div>
      <div
        className={`absolute left-[0.20rem] top-[0.20rem] bg-white w-[0.85rem] h-[0.85rem] rounded-full transition
                ${checked ? "translate-x-full" : "translate-x-0"}
                  `}
      ></div>
    </div>
  );
}
