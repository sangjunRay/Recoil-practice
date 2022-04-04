import { IToDo } from "../atom";

const ToDo = ({ text, category, id }: IToDo) => {
  return (
    <li key={id}>
      {text} {category}
    </li>
  );
};

export default ToDo;
