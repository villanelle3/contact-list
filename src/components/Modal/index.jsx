import { useState } from "react";
import { Titulo } from "./style";
import Form from 'react-bootstrap/Form';

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className="text-green-500 hover:text-green-700" type="button" onClick={() => setShowModal(true)}>
                Edit
            </button>
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
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Name" value={props.name} autoFocus />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="email" placeholder="Email" value={props.email} />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="tel" placeholder="Phone Number" value={props.phone} />
                                            </Form.Group>
                                        </Form>
                                        <div className="items-center gap-2 mt-3 sm:flex" id="modal__title">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                                                onClick={() => setShowModal(false)}
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