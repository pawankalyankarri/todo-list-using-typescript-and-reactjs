import { NavLink, Outlet } from "react-router-dom";
import './styles/sidebar.css'
const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul className="sideul">
                <li><NavLink to='todo'>Todo List</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Sidebar;