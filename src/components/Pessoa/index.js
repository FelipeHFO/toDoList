import React, { useState } from 'react'
import ListaDeTarefas from '../ListaDeTarefas/index'
import PersonIcon from './img/personIcon.svg'
import './style.css'

const Pessoa = () => {

    const [showTasks, setShowTasks] = useState()

    return(
        <div onClick={() => setShowTasks(<ListaDeTarefas />)} className="listaTarefa">
            <img className="userIcon" alt="personIcon" src={PersonIcon}></img>
            {showTasks}
        </div>
    )
}

export default Pessoa
