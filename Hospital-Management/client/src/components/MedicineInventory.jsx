import React, { useState, useEffect } from 'react';
import './MedicineInventory.css'; // Use for custom scrollbar styles

const MedicineInventory = () => {
  // Demo data for medicines inventory
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paracetamol', stock: 50, minStock: 20, expiry: '2025-01-01' },
    { id: 2, name: 'Ibuprofen', stock: 5, minStock: 10, expiry: '2023-12-31' },
    { id: 3, name: 'Insulin', stock: 30, minStock: 10, expiry: '2024-03-15' },
    { id: 4, name: 'Cough Syrup', stock: 100, minStock: 50, expiry: '2026-05-10' },
    // Add more data to demonstrate scrolling
    { id: 5, name: 'Aspirin', stock: 25, minStock: 5, expiry: '2024-12-12' },
    { id: 6, name: 'Vitamin C', stock: 40, minStock: 15, expiry: '2025-07-01' },
    { id: 7, name: 'Amoxicillin', stock: 15, minStock: 10, expiry: '2023-10-01' },
  ]);

  useEffect(() => {
    checkInventory();
  }, [inventory]);

  const checkInventory = () => {
    const itemsToReorder = inventory.filter(item => {
      const needsReorder = item.stock <= item.minStock;
      const nearExpiry = new Date(item.expiry) <= new Date(new Date().setMonth(new Date().getMonth() + 6));
      return needsReorder || nearExpiry;
    });

    if (itemsToReorder.length > 0) {
      console.log("Items to reorder:", itemsToReorder);
    }
  };

  const triggerReorder = (item) => {
    alert(`Reorder placed for ${item.name}!`);
  };

  return (
    <div className="medicine-inventory px-4 py-6">
      <h3 className="text-xl font-semibold mb-4">Medicine Inventory</h3>
      <div className="overflow-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-50 text-left">
              <th className="px-4 py-2">Medicine</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Minimum Stock</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => {
              const needsReorder = item.stock <= item.minStock;
              const nearExpiry = new Date(item.expiry) <= new Date(new Date().setMonth(new Date().getMonth() + 6));

              return (
                <tr
                  key={item.id}
                  className={`hover:bg-gray-100 ${needsReorder ? 'bg-red-50' : nearExpiry ? 'bg-yellow-50' : ''}`}
                >
                  <td className="px-4 py-2">{item.name}</td>

                  {/* Stock with custom scroll */}
                  <td className="px-4 py-2">
                    <div className="max-h-16 overflow-y-auto scrollbar-thumb-rounded scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                      {item.stock}
                    </div>
                  </td>

                  {/* Minimum Stock with custom scroll */}
                  <td className="px-4 py-2">
                    <div className="max-h-16 overflow-y-auto scrollbar-thumb-rounded scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                      {item.minStock}
                    </div>
                  </td>

                  <td className="px-4 py-2">{item.expiry}</td>
                  <td className="px-4 py-2">
                    {needsReorder ? 'Low Stock' : nearExpiry ? 'Near Expiry' : 'Sufficient Stock'}
                  </td>
                  <td className="px-4 py-2">
                    {(needsReorder || nearExpiry) && (
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
                        onClick={() => triggerReorder(item)}
                      >
                        Reorder
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineInventory;
