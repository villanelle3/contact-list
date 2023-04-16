import styled from 'styled-components'

export const Titulo = styled.h4`
    font-weight: bold;
    font-family: 'Jost', sans-serif;
`

export const Botao = styled.button`
    background-color: ${props => props.color};
    padding: 8px;
    color:white;
    font-weigth: bold;
    border-radius: 8px;
    text-shadow: 0.3px 0.3px .3px black;
    transition: 0.5s;
    &:hover{
        background-color: ${props => props.bgcolor};
    }
`