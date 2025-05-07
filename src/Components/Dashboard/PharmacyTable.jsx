const PharmacyTable = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6!">
            <h2 className="text-xl font-bold text-gray-800 mb-6!">Medicine Inventory</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Medicine Name</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Quantity</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Expiry Date</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Manufacturer</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6! py-3! text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">1</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Paracetamol</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Painkillers</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">$5.99</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">500</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2025-12-31</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">PharmaCo</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    In Stock
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Amoxicillin</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Antibiotics</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">$12.99</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">50</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2024-06-30</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">MediLabs</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Low Stock
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">3</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Vitamin C</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">Vitamins</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">$8.99</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">0</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">2024-12-31</td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-700">VitaCorp</td>
                            <td className="px-6! py-4! whitespace-nowrap">
                                <span className="px-3! py-1! inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                    Out of Stock
                                </span>
                            </td>
                            <td className="px-6! py-4! whitespace-nowrap text-sm text-red-600 cursor-pointer">
                                ⨉
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PharmacyTable; 