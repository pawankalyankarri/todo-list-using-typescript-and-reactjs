import { useRef, useState } from "react";
import "./styles/todobox.css";

type Todo = {
  id: number;
  title: string;
  todo: string;
  completed: boolean;
};
type childProps = {
  todo: Todo;
  getChild: (id: number) => void;
  editChild: (id: number, todo: string) => void;
};
const TodoBox = ({ todo, getChild, editChild }: childProps) => {
  let [flag, setFlag] = useState<boolean>(false);
  let textRef = useRef<HTMLInputElement>(null);
  function handleEdit(
    id: number,
    todo: string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void {
    console.log(id);
    console.log(e);
    let ele = (document.querySelector("#todo-text") as HTMLElement) || null;
    if (ele) {
      ele.contentEditable = "true";
    }
    if (flag) {
      if (textRef.current) {
        console.log("text", textRef.current.value);
        editChild(id, textRef.current?.value);
      }
    }
    setFlag(!flag);
  }
  return (
    <div className="todobox">
      <h3>{todo.title}</h3>
      <p id="todo-text">{todo.todo}</p>
      <div className="btns">
        <button onClick={(event) => handleEdit(todo.id, todo.todo, event)}>
          Edit
        </button>
        <button onClick={() => getChild(todo.id)}>Delete</button>
      </div>
    </div>
  );
};
export default TodoBox;
