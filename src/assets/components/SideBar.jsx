import React from "react";
import { NavLink , useNavigate} from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6"; 
import profilepics from "../../assets/Avatar.png";
import prof from "../../assets/navigationone.png";
import spark from "../../assets/sparkle.png";
import cal  from "../../assets/Calendar.png"


const Sidebar = () => {

  const navigate = useNavigate();


  return (
    <div className="h-full bg-white shadow-md flex flex-col relative">
     
      <div className="p-6">
        <p className="text-gray-500 text-sm font-semibold mb-4 pl-4">MAIN</p>
        <ul className="space-y-10">
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2  font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
              }
            >
              
              <img src={prof} alt="" />
              <p>Discover</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2  font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
              }
            
            >
            
              <img src={spark} alt=""/>
              <p>Favorite</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2  font-semibold pl-4"
                  : "flex items-center space-x-2 text-gray-700 pl-4"
              }
            >
              <img src={cal} alt="" />
              <p>Booking</p>
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="bg-gray-200 w-full py-4 px-6 flex items-center justify-between absolute bottom-1/3 left-0 border-t border-gray-300">
        <img src={profilepics} alt="" className="w-12 h-12 bg-gray-300 rounded-full" />
        <p className="text-gray-700 font-medium">Prime Abiola</p>
        <FaArrowRightFromBracket className="text-red-500 cursor-pointer hover:text-red-500 text-lg"

         onClick={() => navigate("/signinpage")}
         />
      </div>
    </div>
  );
};

export default Sidebar;
