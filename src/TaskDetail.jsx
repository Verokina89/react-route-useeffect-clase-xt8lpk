// TaskDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTask({ id: id, description: 'tarea de ejemplo' });
  }, [id]);

  return (
    <>
      <h1>Detalle de la Tarea</h1>
      {task && (
        <div>
          <h2>{task.description}</h2>
          <p>ID: {task.id}</p>
          <Link to="/">Volver a Home</Link>
        </div>
      )}
    </>
  );
}

export default TaskDetail;
