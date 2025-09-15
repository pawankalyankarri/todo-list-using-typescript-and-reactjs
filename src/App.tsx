import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Sidebar />}>
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
