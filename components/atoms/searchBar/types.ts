import { Dispatch, SetStateAction } from "react";

export type SearchBarProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onSearch: Dispatch<SetStateAction<any>>;
};
