import styled from 'styled-components'

const Button = styled.button`
    width: 40px;
    height: 40px;
    font-size: 25px;
    color: white;
    border: 1px solid white;
    background-color: darkcyan;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: all 500ms;

    &:hover{
        background-color: white;
        color: darkcyan;
    }
`

export default Button