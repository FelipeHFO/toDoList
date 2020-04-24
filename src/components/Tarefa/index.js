import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import './style.css'


const Tarefa = ({onRemove}) => {

    const [isDone, setDone] = useState(false)
    const [styleClass, setStyleClass] = useState('checkBoxFalse')

    function toggleCheckBox(){
        if(styleClass === 'checkBoxTrue'){
            setDone(false)
            setStyleClass('checkBoxFalse')
        }
        else{
            setDone(true)
            setStyleClass('checkBoxTrue')
        }
    }


    return(
        <li>
            <input disabled={isDone} type="text"/>
            
            <div className={styleClass} onClick={() => toggleCheckBox()}>
                {isDone === true ? <Icon icon={faCheck} /> : null}
            </div>

            <button onClick={onRemove}>-</button>
        </li>        
    )

}


Tarefa.propTypes = {
    onRemove: PropTypes.func.isRequired
    // Props: PropTypes. tipo do que é requerido. 'isRequired' define que vai ser necessário passar para executar
}

export default Tarefa