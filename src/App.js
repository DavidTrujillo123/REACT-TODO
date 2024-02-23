import './App.css';
import Logo from './components/Logo'
import ListTask from './components/ListTask'

function App() {
  return (
    <div className='app-todo'>
      <Logo title='Todo List' />
      
      <div className='todo-list-container'>
        <h1>To Do</h1>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
