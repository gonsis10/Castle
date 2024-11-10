import React from "react";
import "./task_object.css";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const taskBubble = () => {
  return <div className="task_button">
    <p className="button_text">This is a task name</p>
    <MdRadioButtonUnchecked className="check_circle"/>
    <FaRegTrashCan className="trashcan"/>
  </div>;
};


export default taskBubble;
