import '../styles/ListTask.css'
import Task from './Task'
import TaskForm from './TaskForm'
import { useState } from 'react';


function ListTask() {

  const [tasks, setTask] = useState([]);

  const addTask  = task => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskUpdate = [task, ...tasks]
      setTask(taskUpdate);
    }
  }

  const deleteTask = id => {
    const taskUpdate = tasks.filter(task => task.id !== id);
    setTask(taskUpdate);
  }

  const completedTask = id =>{
    const taskUpdate = tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(taskUpdate);
  }

  return (
    <>
      <TaskForm 
        onSubmit={addTask}
      />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completedTask}
            />
          )
        }
      </div>
    </>
  );
}

export default ListTask;