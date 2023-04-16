import { useState } from "react";
import { Titulo } from "./style";
import Form from 'react-bootstrap/Form';

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);
    const [NewName, setNewName] = useState(props.name);
    const [NewPhone, setNewPhone] = useState(props.phone);
    const [NewEmail, setNewEmail] = useState(props.email);
    const onSubmitHandler = (event) => {
        event.preventDefault()
	    //Form submission happens here
    }
    const inputChangeHandler = (event) => {
        const {name, email, tel} = event.target
        setNewName(name)
        setNewPhone(tel)
        setNewEmail(email)
        console.log(`${name}, ${email}, ${tel}`)
    }
    return (
        <>
            <button className="text-green-500 hover:text-green-700" type="button" onClick={() => setShowModal(true)}>Edit</button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="fixed inset-0 w-full h-full bg-black opacity-40"onClick={() => setShowModal(false)}></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <Titulo className="text-lg font-medium text-gray-800">Edit Contact</Titulo>
                                        <Form className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            <Form.Group className="mb-3" onSubmit={onSubmitHandler}>
                                                <Form.Control type="text" onChange={(e)=>inputChangeHandler(e)} placeholder="Name" value={NewName} autoFocus />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="email" onChange={(e)=>inputChangeHandler(e)} placeholder="Email" value={NewEmail} />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="tel" onChange={(e)=>inputChangeHandler(e)} placeholder="Phone Number" value={NewPhone} />
                                            </Form.Group>
                                            <div className="items-center gap-2 mt-3 sm:flex" id="modal__title">
                                                <button
                                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                                                    type='submit'
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}