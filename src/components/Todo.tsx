import { useEffect, useRef, useState } from "react";
import "./styles/todo.css";
import TodoBox from "./TodoBox";

export type Todo = {
  id: number;
  title : string;
  todo: string;
  completed: boolean;
};

const Todo = () => {
  let inputRef = useRef<HTMLInputElement>(null);
  let titleRef = useRef<HTMLInputElement>(null);
  let [todos, setTodos] = useState<Todo[]>(() => {
    let data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });
   let [cnt,setCnt] = useState <number>(() => {
    const data = localStorage.getItem('tasks')
    return data ? JSON.parse(data).length+1 : 1

  })
  function handlebtn(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      let newTodo = {
        id: cnt,
        title : titleRef.current?.value || "",
        todo: inputRef.current?.value || "",
        completed: false,
      };
      setTodos((prevtodo) => [...prevtodo, newTodo]);
      if (inputRef.current) inputRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
    }
    setCnt((prev=>prev+1))
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  function getChildId(id:number){
        handleDelete(id)
  }
  function handleDelete(id:number):void {
        setTodos(todos.filter(obj=>obj.id != id))
  }

  function handleEdit(id:number,todo:string){
    console.log(id,todo)
    setTodos(todos.map((obj:Todo)=>{
        if(obj.id === id){
            obj.todo = todo
        }
        return obj
    }))

  }

  return (
    <div className="todo">
      <form action="" onSubmit={handlebtn}>
        <div>
          <input type="text" ref={titleRef} placeholder="title"/>
          <input type="text" ref={inputRef} placeholder="todo" />
          
          <input type="submit" />
        </div>
      </form>
      <div className="todo-pass">
        {todos.map((obj) => {
          return (
            <div key={obj.id} className="todo-box">
              <TodoBox todo={obj} getChild = {getChildId} editChild={handleEdit} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
