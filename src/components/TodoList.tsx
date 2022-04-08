import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkMode, toDoCounterSelector, toDoStateSelector } from '../atom';
import { Font } from '../common/font';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	background-color: ${(props) => props.theme.bgColor};
	transition: 0.3s linear;
	height: 100vh;
`;

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 3rem;
	flex-direction: column;
`;

const ToDoContainer = styled.section`
	width: 455px;
	background-color: ${(props) => props.theme.containerColor};
	padding: 1rem;
	box-sizing: border-box;
	border-radius: 5px;
	transition: 0.3s linear;
	margin-bottom: 3rem;
`;

const DarkBtn = styled.button`
	all: unset;
	display: flex;
	cursor: pointer;
	background-color: ${(props) => props.theme.color};
	padding: 0.5rem;
	border-radius: 15px;
	width: 2.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.bgColor};
	justify-content: ${(props) => props.theme.textAlign};
	transition: 0.3s;
	margin-bottom: 0.5rem;
`;

const DarkModeArticle = styled.article`
	display: flex;
	width: 455px;
	align-items: flex-end;
	flex-direction: column;
`;

function TodoList() {
	const setDarkFunction = useSetRecoilState(darkMode);
	const darkmode = useRecoilValue(darkMode);
	const toDoCount = useRecoilValue(toDoCounterSelector);
	const [doing, toDo, done] = useRecoilValue(toDoStateSelector);
	return (
		<Container>
			<Header>
				<Font fontSize="1.5rem" fontColor="#5a5cdb" fontWeight="700">
					Todo with Recoil state managements
				</Font>
				<a href="https://recoiljs.org/ko/">https://recoiljs.org/ko/</a>
			</Header>
			<DarkModeArticle>
				<DarkBtn onClick={() => (darkmode === false ? setDarkFunction(true) : setDarkFunction(false))}>
					{darkmode ? <p>☀️</p> : <p>🌔</p>}
				</DarkBtn>
				<Font fontSize="1rem" fontWeight="400">
					You can switching darkmode!
				</Font>
			</DarkModeArticle>
			<CreateToDo />
			<ToDoContainer style={{ boxSizing: 'border-box' }}>
				<Font fontSize="1.2rem" fontWeight="600" fontColor="#19248b" marginBottom="0.5rem">
					Just Do It!
				</Font>
				<Font fontSize="0.8rem" fontWeight="500" marginBottom="2rem" style={{ color: '#4551be' }}>
					현재 {toDoCount}개의 스케줄이 있습니다.
				</Font>
				<Font fontSize="1rem" fontWeight="600" fontColor="#19248b" marginBottom="0.5rem">
					진행 예정
				</Font>
				{toDo[0] ? (
					toDo.map((todo) => <ToDo key={todo.id} text={todo.text} id={+todo.id} category={todo.category} />)
				) : (
					<Font fontSize="0.8rem" fontWeight="400" fontColor="#5c69df" marginBottom="1rem">
						진행 예정인 스케줄이 아직 없습니다.
					</Font>
				)}
				<Font fontSize="1rem" fontWeight="600" fontColor="#19248b" marginBottom="0.5rem" marginTop="3rem">
					진행 중
				</Font>
				{doing[0] ? (
					doing.map((todo) => <ToDo key={todo.id} text={todo.text} id={+todo.id} category={todo.category} />)
				) : (
					<Font fontSize="0.8rem" fontWeight="400" fontColor="#5c69df" marginBottom="1rem">
						진행 중인 스케줄이 아직 없습니다.
					</Font>
				)}
				<Font fontSize="1rem" fontWeight="600" fontColor="#19248b" marginBottom="0.5rem" marginTop="3rem">
					완료
				</Font>
				{done[0] ? (
					done.map((todo) => <ToDo key={todo.id} text={todo.text} id={+todo.id} category={todo.category} />)
				) : (
					<Font fontSize="0.8rem" fontWeight="400" fontColor="#5c69df" marginBottom="1rem">
						완료된 스케줄이 아직 없습니다.
					</Font>
				)}
			</ToDoContainer>
		</Container>
	);
}

export default TodoList;
