import { IconType } from "react-icons";

export interface CARD {
    id: number;
    icon: {
        component: IconType;
        size: number;
    };
    flipped: boolean;
    matched: boolean;
}