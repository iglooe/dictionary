import { FontTextProp } from "@/types/index";

export default function FontText({
  index,
  fontName,
  active,
  onClick,
  className,
}: FontTextProp) {
  const onClickHandler = (e: any) => {
    e.stopPropagation();
    onClick(index);
  };

  return (
    <div className={className}>
      <p
        className={`
        ${active ? "text-purpleCustom dark:text-purpleCustom font-bold" : ""}`}
        onClick={onClickHandler}
      >
        {fontName}
      </p>
    </div>
  );
}
