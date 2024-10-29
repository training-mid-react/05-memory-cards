import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface Card {
  id: number;
  icon: ReactElement<IconType, any>;
  flipped: boolean;
  assert: boolean;
}
