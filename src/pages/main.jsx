import MyTable from "../components/Tabela";
import Titulo from "../components/Titulo"
import ListaDeTarefas from "../containers/Lista"
import GlobalStyle, { Container } from "../styles"
import store from '../store'
import { Provider } from 'react-redux';

function Main(){
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <Container>
                <Titulo title='Contact List'/>
            </Container>
            <ListaDeTarefas/>
            <MyTable/>
        </Provider>
    )
}

export default Main