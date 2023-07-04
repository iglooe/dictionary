interface Prop {
  index: number;
  fontName: string;
  active: boolean;
  onClick: Function;
  className: string;
}
export default function FontText({
  index,
  fontName,
  active,
  onClick,
  className,
}: Prop) {
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
