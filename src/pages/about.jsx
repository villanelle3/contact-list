import Titulo from "../components/Titulo"
import Description from "../components/Description"
import GlobalStyle, { Container } from "../styles"

function About() {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim error sequi possimus aperiam rerum, a id, dolorum fugit, optio aut blanditiis. Necessitatibus harum hic ipsa, eos corporis nam repellendus!'
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Titulo title='About Us'/>
                <Description desc={text} />
            </Container>
        </>
    );
}

export default About;

