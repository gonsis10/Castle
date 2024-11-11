"use client";

import React, { useState } from "react";
import TaskBubble from "./Task.jsx";

const Page = ({name, IsFinished}) => {
    // const [IsFinished, setFinished] = useState(false)
    
    return (
        <div>
            <TaskBubble name={name} IsFinished={IsFinished}/>
        </div>
    )
}



export default Page;
