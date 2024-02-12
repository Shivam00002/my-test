import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDataStore } from "../components/lib/zustand";

const Showdata = () => {
  const { data, getData } = useDataStore();

  const [editingItemId, setEditingItemId] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:7000/mens/${id}`);
    getData();
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleSave = async (id, updatedData) => {
    const updatedName = document.getElementById(`editInput-${id}`).value;
    await axios.patch(`http://localhost:7000/mens/${id}`, {
      name: updatedName,
    });
    setEditingItemId(null);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <>
        <div>Showdata</div>
        {data?.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              onClick={() => handleDelete(item._id)}
              className="ml-5 text-white border px-4 rounded-lg text-sm bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(item._id)}
              className="ml-5 text-white border px-4 rounded-lg text-sm bg-blue-500"
            >
              Edit
            </button>
            {editingItemId === item._id && (
              <div>
                <input
                  type="text"
                  defaultValue={item.name}
                  id={`editInput-${item._id}`}
                />
                <button
                  onClick={() => handleSave(item._id)}
                  className="ml-5 text-white border px-4 rounded-lg text-sm bg-green-500"
                >
                  Save
                </button>
              </div>
            )}
          </li>
        ))}
      </>
    </div>
  );
};

export default Showdata;
