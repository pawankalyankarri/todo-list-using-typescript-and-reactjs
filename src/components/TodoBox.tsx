import { useRef, useState } from "react";
import "./styles/todobox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from '@fortawesome/free-solid-svg-icons';

type Todo = {
  id: number;
  title: string;
  todo: string;
  completed: boolean;
};
type childProps = {
  todo: Todo;
  getChild: (id: number) => void;
  editChild: (id: number, todo: string,title:string) => void;
};
const TodoBox = ({ todo, getChild, editChild }: childProps) => {
  let [flag, setFlag] = useState<boolean>(false);
  let textRef = useRef<HTMLInputElement>(null);
  function handleEdit(
    id: number,
    todo: string,
    title : string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void {
    // console.log(e);
    let ele = (document.querySelector("#todo-text") as HTMLElement) || null;

    // const editTodoElement = document.getElementById('edittodo');
    // if (editTodoElement) {
    //   editTodoElement.style.display = "block";
    // }
    editChild(id,todo,title)

    if (ele) {
      ele.contentEditable = "true";
    }
    if (flag) {
      if (textRef.current) {
        console.log("text", textRef.current.value);
        
      }
    }
    setFlag(!flag);
  }
  return (
    <div className="todobox">
      <h3 className="h3" >{todo.title}</h3>
      <p  id="todo-text">{todo.todo}</p>
      <div className="btns">
        <button className="edit" onClick={(event) => handleEdit(todo.id, todo.todo,todo.title, event)}>
            <FontAwesomeIcon className="editicon" icon={faEdit} />
        </button>
        <button className="delete" onClick={() => getChild(todo.id)}><FontAwesomeIcon className="deleteicon" icon={faTrash} /></button>
      </div>
    </div>
  );
};
export default TodoBox;
