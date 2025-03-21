'use client'
import React, { useState } from "react";
import { Axios } from "../api/Axios";

interface CreateMenuFormProps {
  onClose: () => void;
  onMenuCreated: () => void;
}

const CreateMenuForm = ({ onClose, onMenuCreated }: CreateMenuFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('')
    try {
        const response = await Axios.get("/menus");
        const existingMenu = response.data.find((menu: any) => menu.name === name);
        if (existingMenu) {
          setError("this menu already exists");
          return;
        }

      await Axios.post("/create-menu", { name, description });
      onMenuCreated();
      onClose();
    } catch (error) {
      console.error("Error creating menu:", error);
      setError("Failed to create menu");

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Create New Menu</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Menu Name</label>
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
      
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Menu
      </button>
    </form>
  );
};

export default CreateMenuForm;