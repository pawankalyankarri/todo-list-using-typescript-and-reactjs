import { useEffect, useRef, useState } from "react";
import "./styles/todo.css";
import TodoBox from "./TodoBox";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export type Todo = {
  id: number;
  title: string;
  todo: string;
  completed: boolean;
};

const Todo = () => {
  let inputRef = useRef<HTMLInputElement>(null);
  let titleRef = useRef<HTMLInputElement>(null);
  let [show, setShow] = useState<boolean>(false);
  let navigate = useNavigate();
  let [todos, setTodos] = useState<Todo[]>(() => {
    let data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });
  let [cnt, setCnt] = useState<number>(() => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data).length + 1 : 1;
  });

  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { id, todo, title } = location.state as {
        id: number;
        todo: string;
        title: string;
      };
      // console.log("updated");
      setTodos((prevTodos) =>
        prevTodos.map((obj) => {
          if (obj.id === id) {
            return { ...obj, todo, title };
          }
          return obj;
        })
      );
      let container = document.querySelector(
        ".container"
      ) as HTMLElement | null;
      if (container) container.style.display = "block";
    }
  }, [location.state]);

  function handlebtn(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      let newTodo = {
        id: cnt,
        title: titleRef.current?.value || "",
        todo: inputRef.current?.value || "",
        completed: false,
      };
      setTodos((prevtodo) => [...prevtodo, newTodo]);
      if (inputRef.current) inputRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
    }
    setCnt((prev) => prev + 1);
    setShow(!show);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  function getChildId(id: number) {
    handleDelete(id);
  }
  function handleDelete(id: number): void {
    setTodos(todos.filter((obj) => obj.id != id));
  }

  function handleEdit(id: number, todo: string, title: string) {
    // console.log('id,todo',id,todo)

    let container = document.querySelector(".container") as HTMLElement | null;
    if (container) container.style.display = "none";
    setTodos(
      todos.map((obj: Todo) => {
        if (obj.id === id) {
          obj.todo = todo;
        }
        return obj;
      })
    );
    navigate("/todo/edittodo", { state: { id: id, todo: todo, title: title } });
  }

  return (
    <div className="todo">
      <Outlet />
      <div className="container">
        <div className="todo-pass">
          {show ? (
            <form action="" onSubmit={handlebtn} className="form">
              <div className="read-data">
                <input type="text" ref={titleRef} placeholder="title" />
                <input type="text" ref={inputRef} placeholder="todo" />

                <input type="submit" value='Add Todo' />
              </div>
            </form>
          ) : (
            <div className="show-form">
              <h1 className="h1" onClick={() => setShow(!show)}>➕</h1>
            </div>
          )}
          {show? '': <>
            {todos.map((obj, idx) => {
            return (
              <div key={idx} className="todo-box">
                <TodoBox
                  todo={obj}
                  getChild={getChildId}
                  editChild={handleEdit}
                />
              </div>
            );
          })}
            </>}
        </div>
      </div>
    </div>
  );
};
export default Todo;
