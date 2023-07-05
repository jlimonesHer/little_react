import React, {useState} from "react";
import { v4 as uuidv4} from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newtask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newtask);
  }


  return (
    <form className="tasks_form" onSubmit={handleSubmit}>
      <input 
        className="task_input"
        type='text'
        placeholder="write a task"
        name="text"
        onChange={handleChange}
      />
      <button className="btn_task">
        Agregar tarea
      </button>
    </form>
  )
}

export default TaskForm;