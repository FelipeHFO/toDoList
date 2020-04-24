import React, { useState, useEffect } from "react";
import Tarefa from "../Tarefa";
import AddButton from "../Button/";
import Warn from "./img/warn.png"
import './style.css';

const ListaDeTarefas = () => {

  const [tasks, setTasks] = useState([]);
  const [showAddButton, setShowAddButton] = useState(true);

  useEffect(() => {
    if(tasks.length >= 2)
      setShowAddButton(false)
    else
      setShowAddButton(true)
    
  }, [tasks])

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
    <div className="listaTarefa">
      <ul>
        {tasks.map((task) => (
          <Tarefa key={task.id} onRemove={removeTask(task.id)} /> // key é uma propriedade do react que é utilizada para identificar um componente na Virtual DOM
        ))}
      </ul>
      {showAddButton !== false ? (<AddButton onClick={() => setTasks([...tasks, {id: new Date().getTime()}])}>+</AddButton>) : null}
      {showAddButton !== true ? (<div className="flex"><img className="warnIcon" alt="warnIcon" src={Warn}></img> <p>Lista de Tarefas cheia</p></div>) : null}
      
    </div>
  );
};

export default ListaDeTarefas;
