import { useEffect, useRef, useState } from "react";
// import "./styles/todo.css";
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
  const todoColors: string[] = [
    "#FFEBEE",
    "#FFF3E0",
    "#FFFDE7",
    "#E8F5E9",
    "#E3F2FD",
    "#F3E5F5",
    "#FCE4EC",
    "#E0F7FA",
    "#FFF0F5",
    "#F9FBE7",
  ];
  let [todos, setTodos] = useState<Todo[]>(() => {
    let data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });
  let [cnt, setCnt] = useState<number>(() => {
    const data = localStorage.getItem("tasks");
    // return data ? JSON.parse(data).length + 1 : 1;
    const todos: Todo[] = data ? JSON.parse(data) : [];
  if (todos.length > 0) {
    const maxId = Math.max(...todos.map((t) => t.id));
    return maxId + 1;
  } else {
    return 1;
  }
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
    if (
      inputRef.current &&
      inputRef.current.value.trim() !== "" &&
      titleRef.current &&
      titleRef.current.value.trim() !== ""
    ) {
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

  function handleEdit(id: number, todo: string, title: string,flag:boolean) {
    // console.log('id,todo',id,todo)

    let container = document.querySelector(".container") as HTMLElement | null;
    if (container) container.style.display = "none";
    console.log('todo',flag)
    if(flag){
      let container = document.querySelector(".container") as HTMLElement | null;
      if (container) container.style.display = "none";
    }
    setTodos(
      todos.map((obj: Todo) => {
        if (obj.id === id) {
          obj.todo = todo;
        }
        return obj;
      })
    );
    navigate("/home/todo/edittodo", { state: { id: id, todo: todo, title: title } });
  }

  return (
    <div className="todo  w-full p-1">
      <Outlet />
      <div className=" p-1.5" >
        <div className="todo-pass h-64 grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {show ? (
            <form action="" onSubmit={handlebtn} className="form flex justify-center items-center w-full col-span-3 h-screen">
              <div className="read-data">
                <input type="text" ref={titleRef} placeholder="Title" className=" border-b-4 m-1 border-sky-500 rounded p-2 outline-none w-lg placeholder:text-gray-500 placeholder:italic"/>
                <input type="text" ref={inputRef} placeholder="Write some thing here" className="rounded m-1 p-2 w-lg border-b-4 outline-none border-purple-500 placeholder:italic placeholder:text-gray-500"   />

                <div className="flex justify-center w-lg rounded m-1  text-blue-50">
                  <input type="submit" className="rounded w-auto shadow-lg px-5 bg-blue-700 hover:bg-blue-600 active:bg-green-400 font-bold text-lg p-2" value="Add Todo" />
                </div>
              </div>
            </form>
          ) : (
            <div className="show-form shadow-lg h-64 rounded cursor-pointer flex justify-center items-center bg-blue-300 " onClick={() => setShow(!show)}>
              <h1 className="h1 font-bold text-4xl">➕</h1>
            </div>
          )}
          {show ? (
            ""
          ) : (
            <>
              {todos.map((obj, idx) => {
                const bgColor = todoColors[idx % todoColors.length];
                return (
                  <div
                    key={idx}
                    className="todo-box shadow-lg  h-64 "
                    style={{ backgroundColor: bgColor }}
                  >
                    <TodoBox
                      todo={obj}
                      getChild={getChildId}
                      editChild={handleEdit}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Todo;
