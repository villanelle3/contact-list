import Item from "../TableItem";

export default function Table() {
    return (
        <div className="container mx-auto px-60">
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4">
                                            <div className="flex items-center h-5"></div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Email</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Phone</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {/* =============================================================================== */}
                                    <Item />
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
