import React from "react";
import "./TaskBubble.css";
import "./CheckBox.css";
import "./TrashCan.css";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const TaskBubble = ({name, IsChecked}) => {
    return (

    <div className="task">
      <p className="button_text">{name}</p>
      <MdRadioButtonUnchecked className="check_circle"/>
      <FaRegTrashCan className="trashcan"/>
    </div>
    
    )
  };

export default TaskBubble;