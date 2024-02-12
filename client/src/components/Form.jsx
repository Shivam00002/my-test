import React, { useState } from "react";
import { useSubmitStore, useDataStore } from "../components/lib/zustand";

export const Form = () => {
  const handleSubmit = useSubmitStore((state) => state.handleSubmit);
  const { getData } = useDataStore();
  const [form, setForm] = useState({
    age: "",
    country: "",
    dob: "",
    gender: "",
    mobile: "",
    name: "",
  });

  const { age, country, dob, gender, mobile, name } = form;

  const onSave = async (e) => {
    e.preventDefault();
    await handleSubmit(form);
    // Clear the form 
    setForm({
      age: "",
      country: "",
      dob: "",
      gender: "",
      mobile: "",
      name: "",
    });
    getData();
  };

  return (
    <>
      <form
        className="md:w-[400px] w-full px-2 p-2 h-fit rounded-md shadow-lg mx-auto"
        onSubmit={onSave}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter name"
          className="w-full mb-2 h-[30px] px-2 p-2 border rounded-md"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          placeholder="Enter age"
          className="w-full mb-2 h-[30px] px-2 p-2 border rounded-md"
        />

        <select
          value={gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          className="w-full mb-2 h-[30px] border rounded-md"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="text"
          value={dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
          placeholder="Enter DOB"
          className="w-full mb-2 h-[30px] p-2 px-2 border rounded-md"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          placeholder="Enter country"
          className="w-full mb-2 h-[30px] p-2 px-2 border rounded-md"
        />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          placeholder="Enter mobile"
          className="w-full mb-2 h-[30px] p-2 px-2 border rounded-md"
        />
        <input
          type="submit"
          className="w-full mt-4 h-[30px] bg-blue-500 text-white border rounded-md"
        />
      </form>
    </>
  );
};
