import styled from 'styled-components'

export const Cont = styled.div`
    max-width: 750px;
    margin: auto;
    margin-top: 16px;
    border: 1.5px solid  rgb(234 179 8);
    border-radius: 6px;
    @media screen and (max-width: 767px) {
        font-size: 12px;
        max-width: 450px;
    }
`

export const Par = styled.p`
    font-family: 'Jost', sans-serif;
    margin: 8px 0 16px 0;
    text-align: center;
    font-weight: bold;
    @media screen and (max-width: 767px) {
        font-size: 12px;
        max-width: 450px;
    }
`