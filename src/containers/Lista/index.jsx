import * as S from './style'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

const ListaDeTarefas = function(){
    const [showForm, setshowForm] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    return(
        <main>
            {
                showForm ? 
                <Container id='AddForm'>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicText">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email address" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="phone" placeholder="Phone number" />
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