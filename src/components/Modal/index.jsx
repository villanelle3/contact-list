import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Botao } from './style';

function ModalEdit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Botao type="button" color='#818589	' bgcolor='#A9A9A9' onClick={handleClose}>Close</Botao>
                <Botao type="button" color='#228B22' bgcolor='#4F7942' onClick={handleClose}>Save Changes</Botao>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ModalEdit