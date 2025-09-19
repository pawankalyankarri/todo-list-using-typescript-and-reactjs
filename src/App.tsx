import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Todo from "./components/Todo";
import Sidebar from "./components/Sidebar";
import EditTodo from "./components/EditTodo";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";

function App() {
  return (
    <div className=" w-full h-full app ">
      <Routes>
        <Route path="" element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="home" element={<Sidebar />}>
          <Route path="todo" element={<Todo />} >
          <Route path="edittodo" element={<EditTodo/>}/>
        </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
