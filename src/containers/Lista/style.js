import styled from 'styled-components'

export const Description = styled.h2`
    font-family: 'Jost', sans-serif;
    margin: 0 1em;
    padding: 0.25em 1em;
    text-align: center;
    font-size: 1.1em;
`

export const BtnAdd = styled.button`
    background-color: rgb(161 98 7);
    padding: 8px;
    color:white;
    font-weigth: bold;
    border-radius: 8px;
    text-shadow: 0.3px 0.3px .3px black;
    transition: 0.5s;
    &:hover{
        background-color: rgb(202 138 4);
    }
`

export const BtnAddPerson = styled.button`
    background-color: rgb(161 98 7);
    padding: 8px;
    color:white;
    font-weigth: bold;
    border-radius: 8px;
    text-shadow: 0.3px 0.3px .3px black;
    transition: 0.5s;
    font-size: 0.85em;
    &:hover{
        background-color: rgb(202 138 4);
    }
`