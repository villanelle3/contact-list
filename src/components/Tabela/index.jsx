import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { Cont } from "./styles";

export default function MyTable() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [number, setNumber] = useState(0);
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
                console.log(actualData) // Print data
                setData(actualData);
                setError(null);
                setNumber(actualData.length);
            })
            .catch((err) => {
                console.log(err.message); // Print data
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);
        //setNumber(data.length);
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
                    {/* =============================================================================== */}
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
                                        <td><a className="text-green-500 hover:text-green-700" href="/"> Edit</a>
                                        </td>
                                        <td><a className="text-red-500 hover:text-red-700" href="/"> Delete </a></td>
                                    </tr>
                            ))
                        }
                    {/* =============================================================================== */}
                </tbody>
                </Table>
            </Cont>
            <p>{number}</p>
        </>
    );
}
