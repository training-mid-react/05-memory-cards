import { FaJava } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandCSharp } from 'react-icons/tb';

export interface CardType {
  id: number;
  icon: JSX.Element;
  flipped: boolean;
  assert: boolean;
}

export const initialCards: CardType[] = [
  { id: 1, icon: <FaJava size={50} />, flipped: false, assert: false },
  { id: 2, icon: <IoLogoJavascript size={50} />, flipped: false, assert: false },
  { id: 3, icon: <IoLogoJavascript size={50} />, flipped: false, assert: false },
  { id: 4, icon: <TbBrandCSharp size={50} />, flipped: false, assert: false },
  { id: 5, icon: <FaJava size={50} />, flipped: false, assert: false },
  { id: 6, icon: <TbBrandCSharp size={50} />, flipped: false, assert: false }
];
