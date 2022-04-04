import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
  toDo: string;
}

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
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "작성해야합니다." })}
          placeholder="할 일을 적어주세요."
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default CreateToDo;
