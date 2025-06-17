"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    size: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <section className="py-16 px-4 md:px-8  mx-auto bg-white p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">REQUEST A QUOTE</h2>

      <form onSubmit={handleSubmit} className="space-y-3 text-neutral-600 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="text-black">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Time Frame<span className="text-red-500">*</span></label>
            <select
              title="timeframe"
              name="timeframe"
              value={form.timeframe}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Time Frame</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Size<span className="text-red-500">*</span></label>
            <select
              title="size"
              name="size"
              value={form.size}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Quantity<span className="text-red-500">*</span></label>
            <select
              title="quants"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Quantity</option>
              <option>1-10</option>
              <option>10-50</option>
              <option>50+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Please Describe Your Project<span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-2 h-40"
            placeholder="Choose a project type"
          ></textarea>
        </div>

        <p className="text-center text-sm text-gray-500">
          By submitting this form you agree to our{" "}
          <a href="#" className="underline font-medium">Terms of Service</a> and{" "}
          <a href="#" className="underline font-medium">Privacy Policy</a>.
        </p>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Lorem Ipsum →
          </button>
        </div>
      </form>
    </section>
  );
}
