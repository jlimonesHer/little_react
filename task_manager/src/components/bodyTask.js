import React from "react";
import '../css/bodyTask.css'
import '../css/TaskForm.css'
import '../css/TaskList.css'
import Tasks from './Tasks'
import TasksForm from './TaskForm'
import TasksList from './TaskList'

function HeadTasks() {
  return (
    <div className="tasks_main_list">
      <h1>My tasks</h1>
      <TasksList />
    </div>
  )
}

export default HeadTasks;