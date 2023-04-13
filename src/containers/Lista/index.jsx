import * as S from './style'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const ListaDeTarefas = () => (
    <main>
        <S.Description>
            <S.BtnAdd>Add new contact</S.BtnAdd>
        </S.Description>
        <Container id='AddForm'>
                <Form>
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
                        <Col>
                            <S.BtnAddPerson>Add +</S.BtnAddPerson>
                        </Col>
                    </Row>
                </Form>
        </Container>
    </main>
)

export default ListaDeTarefas