import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Botao } from './style';

function ModalEdit(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [NewName, setNewName] = useState(props.name);
    const [NewPhone, setNewPhone] = useState(props.phone);
    const [NewEmail, setNewEmail] = useState(props.email);
    function handleClose(){
        setShow(false)
        setNewName(props.name)
        setNewPhone(props.phone)
        setNewEmail(props.email)
    }

    return (
        <>
        <button className="text-green-500 hover:text-green-700" type="button" onClick={handleShow}>Edit</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        autoComplete='off'
                        value={NewName}
                        autoFocus
                        onChange={(e) => {setNewName(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={NewEmail}
                        onChange={(e) => {setNewEmail(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="tel"
                        value={NewPhone}
                        onChange={(e) => {setNewPhone(e.target.value)}}
                    />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Botao type="button" color='#818589	' bgcolor='#A9A9A9' onClick={handleClose}>Close</Botao>
                <Botao type="submit" color='#228B22' bgcolor='#4F7942' 
                    onClick={(e) => {
                    e.preventDefault()
                    props.updateContact(props.id, NewName, NewPhone, NewEmail)
                    setShow(false)
                    }}>Save Changes</Botao>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalEdit