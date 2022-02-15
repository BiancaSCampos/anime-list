import { Dispatch, SetStateAction } from "react";
import { Anime } from "../../../types";

export type SliderProps = {
  animes: Anime[];
  currentAnime: number;
  setCurrentAnime: Dispatch<SetStateAction<number>>;
  onPress: () => void;
};
