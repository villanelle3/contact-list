import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Cont, Par } from "./styles";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {remover, editar } from '../../store/reducers/contatos';
import ModalEdit from "../Modal";
// import Modal from "../Modal";

export default function MyTable() {
    const { itens } = useSelector(state => state.contatos);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [number, setNumber] = useState(0);
    const [reduxData, setreduxData] = useState(itens.length);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/villanelle3/fake-api-3/people`)
            .then((response) => {
                if (!response.ok) 
                {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
                setNumber(actualData.length);
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
        function handleRemove(id) {
            const newList = data.filter((item) => item.id !== id);
            setData(newList);
            setNumber(number - 1);
        }
        function handleRemoveRedux(id) {
            dispatch(remover(id));
            setreduxData(reduxData - 1);
        }
        function updateContact(id, NewName, NewPhone, NewEmail){  // Update item (API)
            const lista = data.map((item) => {
                if (id === item.id){
                    return{...item, name: NewName, phone: NewPhone, email: NewEmail}
                }
                else{
                    return item
                }
            })
            setData(lista)
        }
        function updateContactRedux(id, NewName, NewPhone, NewEmail){  // Update item (API)
            dispatch(editar({
                id, nome: NewName, email: NewEmail, telefone: NewPhone
            }))
        }
    return (
        <>
            <Cont>
                <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* ============================== CONTATOS VIA API ================================================= */}
                    {loading && <div>A moment please...</div>}
                        {error && (
                            <div>{`There is a problem fetching the data - ${error}`}</div>
                        )}
                        {data &&
                            data.map(({ id, name, email, phone }) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>
                                        <ModalEdit id={id} name={name} email={email} phone={phone} updateContact={updateContact}/>
                                    </td>
                                    <td>
                                        <button 
                                            className="text-red-500 hover:text-red-700" 
                                            type="button" 
                                            onClick={() => handleRemove(id)} > 
                                            Delete 
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    {/* ============================ CONTATOS VIA REDUX =================================================== */}
                    {itens.map((t) => (
                        <tr key={ t.id }>
                            <td>{ t.nome }</td>
                            <td>{ t.email }</td>
                            <td>{ t.telefone }</td>
                            <td>
                                <ModalEdit 
                                    id={t.id} 
                                    name={t.nome} 
                                    email={t.email} 
                                    phone={t.telefone} 
                                    updateContact={updateContactRedux}
                                />
                            </td>
                            <td>
                                <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveRedux(t.id)} > 
                                    Delete 
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </Cont>
            <Par>{number + reduxData > 0 ? `Total number of contacts: ${number + reduxData} ` : "No contacts yet!"}</Par>
        </>
    );
}
