import Item from "../TableItem";
import { useState, useEffect } from "react";

export default function Table() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
    return (
        <div className="container mx-auto px-60">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="divide-y divide-gray-200">
                                    {/* =============================================================================== */}
                                    {loading && <div>A moment please...</div>}
                                    {error && (
                                        <div>{`There is a problem fetching the data - ${error}`}</div>
                                    )}
                                    {data &&
                                        data.map(({ id, name, email, phone }) => (
                                            <div key={id}><Item  id={id} name={name} email={email} phone={phone} /></div>
                                        ))
                                    }
                                    {/* =============================================================================== */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
