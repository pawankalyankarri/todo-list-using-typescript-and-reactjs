import { useState } from "react";
// import "./styles/todobox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

type Todo = {
  id: number;
  title: string;
  todo: string;
  completed: boolean;
};
type childProps = {
  todo: Todo;
  getChild: (id: number) => void;
  editChild: (id: number, todo: string, title: string,flag:boolean) => void;
};
const TodoBox = ({ todo, getChild, editChild }: childProps) => {
  let [flag, setFlag] = useState<boolean>(false);
  function handleEdit(
    id: number,
    todo: string,
    title: string
  ): void {

    // const editTodoElement = document.querySelector('.todobox');
    // console.log(editTodoElement)
    // if (editTodoElement) {
    //   editTodoElement.style.display = "block";
    //}
    editChild(id, todo, title,!flag);
    console.log(flag)
    setFlag(!flag);
  }
  return (
    <div className="todobox p-2 flex flex-col items-center justify-between h-full ">
      <div>
        <h3 className="h3 font-bold text-3xl mb-1 text-center font-mono  ">{todo.title}</h3>
        <p id="todo-text " className="font-serif p-0.5">{todo.todo}</p>
      </div>
      <div className="btns flex justify-around w-full items-center p-2">
        <button
          className="edit"
          onClick={() => handleEdit(todo.id, todo.todo, todo.title)}
        >
          <FontAwesomeIcon className="editicon cursor-pointer text-xl " icon={faEdit} />
        </button>
        <button className="delete" onClick={() => getChild(todo.id)}>
          <FontAwesomeIcon className="deleteicon cursor-pointer text-xl  " icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
export default TodoBox;
