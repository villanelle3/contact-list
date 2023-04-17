import MyTable from "../components/Tabela";
import { useState } from "react";
import Titulo from "../components/Titulo"
import ListaDeTarefas from "../containers/Lista"
import GlobalStyle, { Container } from "../styles"
import store from '../store'
import { Provider } from 'react-redux';

function Main(){
    const [number, setNumber] = useState(0);
    const pull_data = (data) => {
        setNumber(data);
    }
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Container>
                <Titulo title='Contact List'/>
            </Container>
            <ListaDeTarefas func={pull_data} />
            <MyTable newItens={number} />
        </Provider>
    )
}

export default Main