'use client'
import React, { useState } from "react";
import { Axios } from "../api/Axios";

interface AddMenuItemFormProps {
  menuId: string;
  onClose: () => void;
  onItemAdded: () => void;
}

const AddMenuItemForm = ({ menuId, onClose, onItemAdded }: AddMenuItemFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Axios.post(`/add-menu-item/${menuId}`, { name, description, price });
      onItemAdded();
      onClose();
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add Menu Item</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddMenuItemForm;