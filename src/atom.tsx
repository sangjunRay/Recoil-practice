import { atom } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    category: "진행 예정" | "진행 중" | "완료";
  }


export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
  });

export const darkMode = atom({
    key: "darkmode",
    default: false,
})