import React from "react";
import "./task_object.css";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Task from "./Task";

// const taskBubble = () => {
//   return (
//     <div>
//         <Task />
//         <Task/>
//         <Task/>
//         <button className="py-2 px-4 rounded-2xl bg-green-500">Click Me!</button>
//     </div>
//   );
// };
const taskBubble = () => {
    return (
      <div>
          <Task name="Task name test"/>
          {/* <MdRadioButtonUnchecked className=/> */}
      </div>
    );
  };


export default taskBubble;
