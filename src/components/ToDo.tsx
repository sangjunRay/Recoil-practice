import styled from "styled-components";
import { IToDo } from "../atom";
import { Font } from "../common/font";

const TodoStyle = styled.li`
  display: flex;
  width: 450px;
  margin: 0.5rem;
`;

const ToDo = ({ text, category, id }: IToDo) => {
  return (
    <TodoStyle key={id}>
      <Font fontSize="1rem" fontWeight="700" fontColor="black" marginRight='1rem'>
        {text}
      </Font>
      <Font fontSize="0.8rem" fontWeight="400" style={{color:'#36a36d'}}>
        {category}
      </Font>
    </TodoStyle>
  );
};

export default ToDo;
