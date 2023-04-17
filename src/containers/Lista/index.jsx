import * as S from './style'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux';

const ListaDeTarefas = function(props){
    const dispatch = useDispatch();
    const [showForm, setshowForm] = useState(false)
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [Telefone, setTelefone] = useState("")
    const [NewItens, setNewItens] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();
        setNewItens(NewItens + 1)
        const newContact = new Contato(NewItens + 16, Nome, Email, Telefone)
        dispatch(cadastrar(newContact))
    }
    props.func(NewItens);
    return(
        <main>
            {
                showForm ? 
                <Container id='AddForm'>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicText">
                                    <Form.Control 
                                        autoComplete='off' 
                                        required 
                                        type="text" 
                                        placeholder="Name"
                                        onChange={(event) => setNome(event.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        required 
                                        type="email" 
                                        placeholder="Email address"
                                        onChange={(event) => setEmail(event.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control 
                                        required 
                                        type="phone" 
                                        placeholder="Phone number"
                                        onChange={(event) => setTelefone(event.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-2'>
                                <S.BtnAddPerson type='submit'>Add +</S.BtnAddPerson>
                                <S.BtnAddPerson 
                                    className='ml-3' 
                                    inputColor="rgb(220 38 38)" 
                                    inputHover="rgb(248 113 113)" 
                                    onClick={() => setshowForm(false)}>
                                    Cancel
                                </S.BtnAddPerson>
                            </Col>
                        </Row>
                    </Form>
                </Container>  
                : 
                <S.Description>
                    <S.BtnAdd onClick={() => setshowForm(true)}>Add new contact</S.BtnAdd>
                </S.Description>
            }
        </main>
    )
}


export default ListaDeTarefas