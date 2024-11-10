"use client";

import React from 'react';
import "../tasks/tasks.css";

  const ProgressBar = ({ currentValue, maxValue, color }) => {
    let percentage = (currentValue/maxValue)*100
    return (
        <div className="flex flex-row items-center px-4 gap-4 select-none">
            <span className="whitespace-nowrap font-semibold text-sm w-12">{percentage}%</span>
            <div className="w-full bg-black/40 rounded-full h-4">
                <div className="h-4 rounded-full" style={{ width: `${percentage}%`, backgroundColor: `#${color}` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;