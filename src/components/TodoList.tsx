import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <CreateToDo />
      {toDos.map((todo) => (
        <ToDo key={todo.id} text={todo.text} id={+todo.category} category={todo.category} />
      ))}
    </div>
  );
};

export default TodoList;
