import { MouseEventHandler } from "react";

export type FontTextProp = {
  index: number;
  fontName: string;
  active: boolean;
  onClick: Function;
  className: string;
};

export type HeaderProp = {
  onClick: MouseEventHandler<HTMLDivElement>;
  checked: boolean | undefined;
  fontIndex: number;
  fontIndexChangeHandler: Function;
  isMenuOpened: boolean;
  fontChangeHandler: MouseEventHandler<HTMLDivElement>;
};

export type ListProp = {
  list: Array<Object>;
};

export type MeaningProp = {
  meanings: Array<Object>;
};
