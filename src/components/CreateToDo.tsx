import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atom";

interface IForm {
  toDo: string;
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
`

const Input = styled.input`
    all: unset;
    padding: 1rem;
    width: 100%;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.containerColor};
    color: ${props => props.theme.color};
    border-radius: 5px;
`

const AddButton = styled.button`
    all: unset;
    display: flex;
    color: white;
    background-color: #3f49ca;
    cursor: pointer;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    font-size: 3rem;
    position: fixed;
    bottom: 5rem;
    :hover {
        opacity: 0.8;
    }
`

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prevToDos) => [
      { text: toDo, category: "진행 예정", id: Date.now() },
      ...prevToDos,
    ]);
  };
  return (
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("toDo", { required: "작성해야합니다." })}
          placeholder="할 일을 적어주세요."
          autoComplete='off'
        />
        <AddButton>+</AddButton>
      </Form>
  );
};

export default CreateToDo;
