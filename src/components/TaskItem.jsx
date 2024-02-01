import React from "react";
import {MdDeleteSweep} from 'react-icons/md';

const TaskItem = ({task, deletTask, toggleCheck }) => {
    return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={()=> toggleCheck(task.taskName)}/>
        <p className={task.checked? 'isChecked' : ''}>{task.taskName} </p>
        </div>  
        <MdDeleteSweep className="delete-icon" onClick={() => deletTask(task.taskName)}/>
    </li>
    );
};


export default TaskItem;