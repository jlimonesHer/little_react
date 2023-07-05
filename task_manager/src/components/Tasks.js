import React from "react";
import '../css/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tasks({ id, text , completed, taskCompleted, deleteTask }) {
  return (
    <div className={completed ? 'container_tasks completed' : 'container_tasks'}>
      <div className="text_tasks"
      onClick={() => taskCompleted(id)}>
        {text}
      </div>
      <div className="container_icon_task" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="icon_tasks"/>
      </div>
    </div>
  )
}

export default Tasks;