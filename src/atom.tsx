import { atom, selector } from 'recoil';

export interface IToDo {
	id: number;
	text: string;
	category: '진행 예정' | '진행 중' | '완료';
}

export const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

export const darkMode = atom({
	key: 'darkmode',
	default: false,
});

export const toDoCounterSelector = selector({
	key: 'toDoCounterSelector',
	get: ({ get }) => {
		const toDos = get(toDoState);
		return toDos.length;
	},
});

export const toDoStateSelector = selector({
	key: 'toDoStateSelector',
	get: ({ get }) => {
		const stateToDos = get(toDoState);
		return [
			stateToDos.filter((stateToDoss) => stateToDoss.category === '진행 중'),
			stateToDos.filter((stateToDoss) => stateToDoss.category === '진행 예정'),
			stateToDos.filter((stateToDoss) => stateToDoss.category === '완료'),
		];
	},
});
