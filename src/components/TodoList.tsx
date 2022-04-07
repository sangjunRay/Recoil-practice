import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkMode, toDoState } from '../atom';
import { Font } from '../common/font';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  transition: 0.3s linear;
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
  const toDos = useRecoilValue(toDoState);
  const setDarkFunction = useSetRecoilState(darkMode);
  const darkmode = useRecoilValue(darkMode);

  return (
    <Container>
      <Header>
        <Font fontSize="1.5rem" fontColor="#5a5cdb" fontWeight="700">
          Todo with Recoil state managements
        </Font>
        <a href="https://recoiljs.org/ko/">https://recoiljs.org/ko/</a>
      </Header>
      <DarkModeArticle>
        <DarkBtn
          onClick={() => (darkmode === false ? setDarkFunction(true) : setDarkFunction(false))}
        >
          {darkmode ? <p>☀️</p> : <p>🌔</p>}
        </DarkBtn>
        <Font fontSize="1rem" fontWeight="400">
          You can switching darkmode!
        </Font>
      </DarkModeArticle>
      <CreateToDo />
      <ToDoContainer style={{ boxSizing: 'border-box' }}>
        <Font
          style={{ marginBottom: '1rem' }}
          fontSize="1.2rem"
          fontWeight="600"
          fontColor="#19248b"
        >
          Just Do It!
        </Font>
        {toDos[0] ? (
          toDos.map((todo) => (
            <ToDo
              key={todo.id}
              text={todo.text}
              id={+todo.category}
              category={todo.category}
            />
          ))
        ) : (
          <Font fontSize="0.8rem" fontWeight="400" fontColor="#5c69df">
            할 일을 작성해주세요.
          </Font>
        )}
      </ToDoContainer>
    </Container>
  );
}

export default TodoList;
