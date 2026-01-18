import './App.css';
import AddNewTask from './AddNewTask';
import FilterTasks from './FilterTasks';
import TaskList from './TaskList';
import React, {useState, useEffect} from 'react';

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my-todo-list")
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  const [filterStatus, setFilterStatus] = useState(['Not Started', 'In Progress', 'Completed']);

  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(tasks));
  }, [tasks]);

  const handleFilterChange = (status) => {
    if (filterStatus.includes(status)) {
      setFilterStatus(filterStatus.filter(s => s !== status))
    } else {
      setFilterStatus([...filterStatus, status]);
    }
  };

  const filteredTasks = tasks.filter(task => filterStatus.includes(task.status));

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  };

  const editTask = (updatedTask) => {
    const newTasks = tasks.map((task) => 
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddNewTask onAddTask={addTask} />
      <FilterTasks currentFilter={filterStatus} onFilterChange={handleFilterChange}/>
      <div className="task-list-box">
        {filteredTasks.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
