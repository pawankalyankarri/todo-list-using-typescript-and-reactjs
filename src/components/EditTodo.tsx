import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "./styles/edittodo.css";

const EditTodo = () => {
  const [todotitle, setTodotitle] = useState<string>("");
  const [todotext, setTodotext] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as
      | { id: number; todo: string; title: string }
      | undefined;

    if (state) {
      const { todo, title } = state;

      setTodotext(todo ?? "");
      setTodotitle(title ?? "");
    } else {
      navigate("/");
    }
  }, []);

  function handlebtn(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // console.log("Updated title:", todotitle);
    // console.log("Updated text:", todotext);
    navigate("/home/todo/", {
      state: { id: location.state.id, todo: todotext, title: todotitle },
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    if (name === "title") {
      setTodotitle(value);
    } else if (name === "text") {
      setTodotext(value);
    }
  }

  return (
    <div className="edittodo ">
      <form onSubmit={handlebtn} className="edit-form flex justify-center items-center h-screen ">
        <div className="edit-container flex justify-center flex-col items-center border-5 rounded h-fit p-4">
          <input
            type="text"
            value={todotitle}
            name="title"
            className="border-b-4 m-1 font-serif border-sky-500 rounded p-2 outline-none w-lg placeholder:text-gray-500 placeholder:italic"
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            value={todotext}
            name="text"
            onChange={handleChange}
            placeholder="Todo"
            className="rounded m-1 p-2 w-lg  font-serif border-b-4 outline-none border-purple-500 placeholder:italic placeholder:text-gray-500"
          />
          <div>
            <input
              type="submit"
              className="rounded w-auto shadow-lg px-5 font-mono  bg-blue-700 hover:bg-blue-600 active:bg-green-400 font-bold text-lg p-2"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
