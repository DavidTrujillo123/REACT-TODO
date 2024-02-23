import { useState } from 'react';
import '../styles/TaskForm.css';

function TaskForm(props) {

  const [input, setInput] = useState('');
  const [id, setId] = useState(1);

  const changeData = e => {
    setInput(e.target.value);
  }

  const sendData = e =>{
    e.preventDefault();

    const newTask = {
      id: id,
      text: input,
      completed: false,
    }

    setId(id+1);
    props.onSubmit(newTask);
  }

  return (
    <form 
      className='task-form'
      onSubmit={sendData}
    >
      <input 
        className='task-input'
        type='text'
        placeholder='Escribe una tarea'
        name='text'
        onChange={changeData}
      />
      <button className='task-btn'>Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;