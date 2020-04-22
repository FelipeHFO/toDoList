import React from 'react'
import PropTypes from 'prop-types'


const Tarefa = ({onRemove}) => {


    return(
        <li>
            <input type="text"/>
            <input type="checkbox"/>
            <button onClick={onRemove}>-</button>
        </li>        
    )

}


Tarefa.propTypes = {
    onRemove: PropTypes.func.isRequired
    // Props: PropTypes. tipo do que é requerido. 'isRequired' define que vai ser necessário passar para executar
}

export default Tarefa