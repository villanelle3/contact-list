import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './reducers'

import contatosReducer from './reducers/contatos'

const store = configureStore({ 
    reducer: {
        contatos: contatosReducer
    }
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
// reducers
export default store