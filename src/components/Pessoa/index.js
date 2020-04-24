import React from 'react'
import ListaDeTarefas from '../ListaDeTarefas/index'
import PersonIcon from './img/personIcon.svg'
import './style.css'

const Pessoa = () => {

    return(
        <div className="listaTarefa">
            <img className="userIcon" alt="personIcon" src={PersonIcon}></img>
            <ListaDeTarefas />
        </div>
    )
}

export default Pessoa
