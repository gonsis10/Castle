import React from "react";
import "./task_object.css";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

// const Task = ({name}) => {
//     return (
//           <div className="task_button">
//               <p className="button_text">{name}</p>
//               <MdRadioButtonUnchecked className="check_circle"/>
//               <FaRegTrashCan className="trashcan"/>
//           </div>
//     );
//   };

const Task = ({ name }) => {
  return (
    <div className="w-30 h-35 flex bg-green-500 rounded-xl items-center justify-left pl-6">
        {name}
    </div>
  );
};

export default Task;
