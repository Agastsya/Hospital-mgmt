import React, { useState, useEffect } from "react";
import "./MedicineInventory.css";
import axios from "axios";
import toast from "react-hot-toast";

const MedicineInventory = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Paracetamol",
      stock: 50,
      minStock: 20,
      expiry: "2025-01-01",
    },
    { id: 2, name: "Ibuprofen", stock: 5, minStock: 10, expiry: "2023-12-31" },
    { id: 3, name: "Insulin", stock: 30, minStock: 10, expiry: "2024-03-15" },
    {
      id: 4,
      name: "Cough Syrup",
      stock: 100,
      minStock: 50,
      expiry: "2026-05-10",
    },
    { id: 5, name: "Aspirin", stock: 25, minStock: 5, expiry: "2024-12-12" },
    { id: 6, name: "Vitamin C", stock: 40, minStock: 15, expiry: "2025-07-01" },
    {
      id: 7,
      name: "Amoxicillin",
      stock: 15,
      minStock: 10,
      expiry: "2023-10-01",
    },
  ]);

  useEffect(() => {
    checkInventory();
  }, [inventory]);

  const checkInventory = () => {
    const itemsToReorder = inventory.filter((item) => {
      const needsReorder = item.stock <= item.minStock;
      const nearExpiry =
        new Date(item.expiry) <=
        new Date(new Date().setMonth(new Date().getMonth() + 6));
      return needsReorder || nearExpiry;
    });

    if (itemsToReorder.length > 0) {
      console.log("Items to reorder:", itemsToReorder);
    }
  };

  const triggerReorder = async (items) => {
    toast.success(`Reorder placed for ${items.name}!`);
    const config = {
      url: "http://localhost:5000/api/auth/sendotp",
      data: items,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    console.log(response.data);
  };

  return (
    <div className="medicine-inventory">
      <h3 className="title">Medicine Inventory</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Stock</th>
              <th>Min Stock</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => {
              const needsReorder = item.stock <= item.minStock;
              const nearExpiry =
                new Date(item.expiry) <=
                new Date(new Date().setMonth(new Date().getMonth() + 6));

              return (
                <tr
                  key={item.id}
                  className={`row ${
                    needsReorder ? "low-stock" : nearExpiry ? "near-expiry" : ""
                  }`}
                >
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>{item.minStock}</td>
                  <td>{item.expiry}</td>
                  <td>
                    {needsReorder
                      ? "Low Stock"
                      : nearExpiry
                      ? "Near Expiry"
                      : "Sufficient Stock"}
                  </td>
                  <td>
                    {(needsReorder || nearExpiry) && (
                      <button
                        className="reorder-btn"
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
      {otpPage && <div className="otp-popup">OPT</div>}
    </div>
  );
};

export default MedicineInventory;
