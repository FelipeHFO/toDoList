import React, { useState } from "react";
import Tarefa from "../Tarefa";
import './style.css'

const ListaDeTarefas = () => {

  const [tasks, setTasks] = useState([]);

  function removeTask(taskId) {
    return () => { // Essa função faz com que não execute a função removeTask quando ela for chamada, pois ela vai colocar o componente e retirar mas sendo um retorno de uma outra função não irá!

      //setTask((currentTasks) => {
        //console.log(taskId, currentTasks);
        //return currentTasks.filter((task) => task.id !== taskId);
      //});

      setTasks(tasks.filter((task) => task.id !== taskId))

    };
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Tarefa key={task.id} onRemove={removeTask(task.id)} /> // key é uma propriedade do react que é utilizada para identificar um componente na Virtual DOM
        ))}
      </ul>
      <button onClick={() => setTasks([...tasks, {id: new Date().getTime()}])}>+</button>
    </div>
  );
};

export default ListaDeTarefas;
