import { useState } from 'react';

const PharmacyForm = () => {
    // Form state
    const [medicineName, setMedicineName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [description, setDescription] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6! mb-8!">
            <div className="flex justify-between items-center mb-6!">
                <h1 className="md:text-2xl text-[20px] font-bold text-gray-800">Pharmacy Management</h1>
                <div className="flex gap-4">
                    <button className="bg-purple-500 hidden md:flex text-white px-4! py-3! rounded-lg hover:bg-purple-600 transition-colors cursor-pointer">
                        Generate Report
                    </button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Medicine ID"
                            className="ring-3 ring-gray-400 w-20 md:w-50 focus:border-0 focus:ring-[#c5baff] outline-none rounded-l-lg px-4! py-2! cursor-pointer"
                        />
                        <button className="bg-yellow-400 text-white px-4! py-3! rounded-r-lg hover:bg-yellow-500 transition-colors cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Medicine Name"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    >
                        <option value="">Select Category</option>
                        <option value="antibiotics">Antibiotics</option>
                        <option value="painkillers">Painkillers</option>
                        <option value="vitamins">Vitamins</option>
                        <option value="cardiac">Cardiac</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="date"
                        placeholder="Expiry Date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                    <input
                        type="text"
                        placeholder="Manufacturer"
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                        className="ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                    />
                </div>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    className="w-full mt-5! ring-4 ring-gray-400 focus:border-0 focus:ring-4 focus:ring-[#c5baff] outline-none rounded-lg px-4! py-2! cursor-pointer"
                />
                <div className="flex gap-4 justify-center mt-10!">
                    <button type="submit" className="bg-green-500 text-white px-6! py-2! rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                        Add Medicine
                    </button>
                    <button type="button" className="bg-blue-500 text-white px-6! py-2! rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                        Update
                    </button>
                    <button type="button" className="bg-red-500 text-white px-6! py-2! rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PharmacyForm; 