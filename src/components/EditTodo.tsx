import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/edittodo.css";

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
    navigate("/todo/", {
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
    <div className="edittodo">
      <form onSubmit={handlebtn} className="edit-form">
        <div className="edit-container">
          <input
            type="text"
            value={todotitle}
            name="title"
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            value={todotext}
            name="text"
            onChange={handleChange}
            placeholder="Todo"
          />
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
