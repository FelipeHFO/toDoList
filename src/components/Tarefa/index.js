import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'


const Tarefa = ({onRemove}) => {

    const [isDone, setDone] = useState(false)

    return(
        <li>
            <input disabled={isDone} type="text"/>
            <input onChange={(event) => setDone(event.target.checked)} checked={isDone} type="checkbox"/>
            <button onClick={onRemove}>-</button>
        </li>        
    )

}


Tarefa.propTypes = {
    onRemove: PropTypes.func.isRequired
    // Props: PropTypes. tipo do que é requerido. 'isRequired' define que vai ser necessário passar para executar
}

export default Tarefa