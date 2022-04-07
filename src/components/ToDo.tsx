import styled from 'styled-components';
import { IToDo } from '../atom';
import { Font } from '../common/font';

const TodoStyle = styled.li`
  display: flex;
  margin: 1rem;
`;

const StateBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

const FontBox = styled.div`
  width: 100%;
`;

const StateBtn = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.bgColor};
  padding: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    opacity: 0.8;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const onClickCategory = (newCategory: IToDo['category']) => {
    console.log(`this job state: ${newCategory}`);
  };
  return (
    <TodoStyle key={id}>
      <FontBox>
        <Font
          fontSize="1rem"
          fontWeight="700"
          fontColor="black"
          marginRight="1rem"
          marginBottom="0.5rem"
        >
          {text}
        </Font>
        <Font fontSize="0.8rem" fontWeight="400" style={{ color: '#36a36d' }}>
          {category}
        </Font>
      </FontBox>
      <StateBtnBox>
        {category !== '진행 중' ? (
          <StateBtn type="button" onClick={() => onClickCategory('진행 중')}>
            진행 중
          </StateBtn>
        ) : (
          ''
        )}
        {category !== '진행 예정' ? (
          <StateBtn type="button" onClick={() => onClickCategory('진행 예정')}>
            진행 예정
          </StateBtn>
        ) : (
          ''
        )}
        {category !== '완료' ? (
          <StateBtn type="button" onClick={() => onClickCategory('완료')}>
            완료
          </StateBtn>
        ) : (
          ''
        )}
      </StateBtnBox>
    </TodoStyle>
  );
}

export default ToDo;
