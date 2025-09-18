import { NavLink, Outlet } from "react-router-dom";
import { faCircleInfo, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './styles/sidebar.css'
const Sidebar = () => {
  let [textshow, setTextshow] = useState<boolean>(false);
//   function handleCollapse(): void {
//     let sidebarele: Element | null = document.querySelector(".sidebar");
//     if (sidebarele) {
//       if (!textshow) {
//         sidebarele.classList.remove("grid-cols-[0.5fr_5fr]");
//         sidebarele.classList.add("grid-cols-[2rem_6fr]");
//         setTextshow(!textshow);
//       } else {
//         if (textshow) {
//           sidebarele.classList.remove("grid-cols-[2rem_6fr]");
//           sidebarele.classList.add("grid-cols-[0.5fr_5fr]");

//           setTextshow(!textshow);
//         }
//       }
//     }
//   }
  return (
    <div className={`sidebar grid  h-screen ${textshow ? "grid-cols-[2rem_6fr]" : "grid-cols-[0.5fr_5fr]"  }`}>
      <ul className="sideul flex flex-col justify-between p-2  ">
        <li className="  font-bold text-orange-500 text-shadow-md hover:text-green-400 ">
          <NavLink to="todo" className="todoli">
            {textshow ? <FontAwesomeIcon icon={faListCheck} /> : "Todo List"}
          </NavLink>
        </li>
        <li
          className="font-bold text-xl hover:border-b-2 cursor-pointer hover:border-green-400 w-fit "
        //   onClick={handleCollapse}
        onClick={()=>{setTextshow(!textshow)}}
        >
          {textshow ? <FontAwesomeIcon icon={faCircleInfo} /> : "Collapse" }
          
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
