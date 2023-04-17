import { createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const initialState = {
    itens: [
        new Contato(14, 'Gastão Azevedo', 'example@redux.com', '(99) 99999-9999' ),
        new Contato(15, 'Gonzalo Bruno', 'example@redux.com', '(99) 99999-9999' ),
    ]
}

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload )
        },
        editar: (state, action) => {
            const ConatctIndex = state.itens.findIndex(t => t.id === action.payload.id)
            if (ConatctIndex >= 0){
                state.itens[ConatctIndex] = action.payload
            }
        },
        cadastrar: (state, action) => {
            const contatoJaExiste = state.itens.find(t => t.nome.toLowerCase() === action.payload.nome.toLowerCase())
            if (contatoJaExiste){
                alert("Contact already exists")
            }
            else{
                state.itens.push(action.payload)
            }
        },
    },
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer

// className="text-green-500 hover:text-green-700"