import Table from "../components/Tabela";
import Titulo from "../components/Titulo"
import ListaDeTarefas from "../containers/Lista"
import GlobalStyle, { Container } from "../styles"

function Main(){
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Titulo title='Contact List'/>
            </Container>
            <ListaDeTarefas/>
            <Table/>
        </>
    )
}

export default Main