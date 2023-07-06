import React, { useState } from "react";
import TaskForm  from "./TaskForm";
import Tasks from "./Tasks";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = newtask => {
    if (newtask.text.trim()) {
      newtask.text = newtask.text.trim();
      const currentTask = [newtask, ...tasks];
      setTasks(currentTask);
    }
  }

  const deleteTask = id => {
    const currentTask = tasks.filter(newtask => newtask.id !== id);
    setTasks(currentTask);
  }

  const taskCompleted = id => {
    const currentTask = tasks.map(newtask => {
      if (newtask.id === id) {
        newtask.completed = !newtask.completed;
      }
      return newtask;
    });
    setTasks(currentTask);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="container_task_list">
        {
          tasks.map((newtask) => 
          <Tasks
            key={newtask.id}
            id={newtask.id}
            text={newtask.text}
            completed={newtask.completed} 
            deleteTask={deleteTask}
            taskCompleted = {taskCompleted} />
          )
        }
      </div>
    </>
    );
}

export default TaskList;