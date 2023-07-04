import { MouseEventHandler } from "react";

export interface FontTextProp {
  index: number;
  fontName: string;
  active: boolean;
  onClick: Function;
  className: string;
}

export interface HeaderProp {
  onClick: MouseEventHandler<HTMLDivElement>;
  checked: boolean | undefined;
  fontIndex: number;
  fontIndexChangeHandler: Function;
  isMenuOpened: boolean;
  fontChangeHandler: MouseEventHandler<HTMLDivElement>;
}

export interface ListProp {
  list: Array<Object>;
}

export interface MeaningProp {
  meanings: Array<Object>;
}
