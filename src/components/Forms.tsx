
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  timeframe: z.string().min(1, "Please select a time frame"),
  size: z.string().min(1, "Please select a size"),
  quantity: z.string().min(1, "Please select a quantity"),
  description: z.string().min(1, "Project description is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Validated Form Data:", data);
    setSubmitted(true);
    reset(); 
    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <section className="py-16 px-4 md:px-8 mx-auto bg-white p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
        REQUEST A QUOTE
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-neutral-600 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              {...register("name")}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              {...register("email")}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              {...register("phone")}
              className="w-full border rounded-2xl px-4 py-2"
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Time Frame<span className="text-red-500">*</span>
            </label>
            <select
              {...register("timeframe")}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Time Frame</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
            {errors.timeframe && <p className="text-red-500 text-sm mt-1">{errors.timeframe.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Size<span className="text-red-500">*</span>
            </label>
            <select
              {...register("size")}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Quantity<span className="text-red-500">*</span>
            </label>
            <select
              {...register("quantity")}
              className="w-full border rounded-2xl px-4 py-2"
            >
              <option value="">Choose Quantity</option>
              <option>1-10</option>
              <option>10-50</option>
              <option>50+</option>
            </select>
            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
          </div>
        </div>

        <div className="text-black">
          <label className="block mb-1 font-medium">
            Please Describe Your Project<span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("description")}
            className="w-full border rounded-2xl px-4 py-2 h-40"
            placeholder="Choose a project type"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
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

      {submitted && (
        <div className="fixed top-50 right-5 bg-green-500 text-white py-2 px-4 rounded shadow-md">
          🎉 Quote Request Submitted!
        </div>
      )}
    </section>
  );
}
