import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import Sidebar from "./components/Sidebar";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Sidebar />}>
          <Route path="todo" element={<Todo />} >
          <Route path="edittodo" element={<EditTodo/>}/>
        </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
