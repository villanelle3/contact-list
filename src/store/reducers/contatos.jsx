import { createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const initialState = [
    new Contato(14, 'Gastão Azevedo', 'exemple@expemle.com', '99 99999-9999' )
]

const counterSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action) => {
            state = state.filter((contato) => contato.id !== action.payload )
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer