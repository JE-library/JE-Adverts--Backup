import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiPostVendorAds } from "../../services/adverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateAd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("description", data.description);
    payload.append("category", data.category);
    payload.append("price", data.price);
    payload.append("file", data.image[0]);

    try {
      const res = await apiPostVendorAds(payload);
      console.log(res.data);
      toast.success("product added successfully");
      navigate("/dashboard/advert");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Post an Advertisement
        </h2>

        {message && (
          <p className="text-green-700 font-semibold mb-4">{message}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Describe your product"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price ($)</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Product price"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            {...register("category", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select one</option>
            <option value="Beauty Tool">Beauty Tool</option>
            <option value="Nails">Nails</option>
            <option value="Hair Products">Hair Products</option>
            <option value="Makeup">Makeup</option>
            <option value="Wellness">Wellness</option>
            <option value="Fragrance">Fragrance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Advertisement
        </button>
      </form>

      {/* <div className="w-full md:w-1/2">
        <img
          src={
            formData.image ||
            "https://cdn.pixabay.com/photo/2017/06/18/14/01/shopping-2415820_1280.jpg"
          }
          alt="Product Preview"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div> */}
    </div>
  );
};

export default CreateAd;
