import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: "진행 예정" | "진행 중" | "완료";
}

interface IForm {
  toDo: string;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const TodoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prevToDos) => [
      { text: toDo, category: "진행 예정", id:Date.now() },
      ...prevToDos,
    ]);
  };
  console.log(toDos)
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "작성해야합니다." })}
          placeholder="할 일을 적어주세요."
        />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => {
          return <li key={toDo.id}>{toDo.text} {toDo.category}</li>
        })}
      </ul>
    </div>
  );
};

export default TodoList;
