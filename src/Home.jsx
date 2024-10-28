// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  cont[(tasks, setTasks)] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const tasksFromAPI = [
        { id: 1, description: 'tarea 1' },
        { id: 2, description: 'tarea 2' },
        { id: 3, description: 'tarea 3' },
      ];
      setTasks(tasksFromAPI);
    }, 1000);
  }, []);
  return (
    <>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li>
            <Link to={`/task/${task.id}`}>{task.description}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
