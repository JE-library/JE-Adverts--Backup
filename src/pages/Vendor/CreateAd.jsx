import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiPostVendorAds } from "../../services/adverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateAd = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const imageWatch = watch("image");

  const onSubmit = async (data) => {
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("description", data.description);
    payload.append("category", data.category);
    payload.append("price", data.price);
    payload.append("file", data.image[0]);

    try {
      const res = await apiPostVendorAds(payload);
      toast.success("Product added successfully");
      navigate("/dashboard/adverts");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-2xl shadow-xl bg-white w-full max-w-lg space-y-6 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-pink-700">
          Post a New Ad
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g. Fenty Beauty Lip Gloss"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows={4}
            placeholder="Briefly describe your product"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Price (GHC)
          </label>
          <input
            type="number"
            step="0.01" // allows decimals
            {...register("price", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g. 35"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select a category</option>
            <option value="Skincare">Skincare</option>
            <option value="Makeup">Makeup</option>
            <option value="Haircare">Haircare</option>
            <option value="Fragrances">Fragrances</option>
            <option value="Nail Care">Nail Care</option>
            <option value="Beauty Tools">Beauty Tools</option>
            <option value="Wellness">Wellness</option>
          </select>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md font-semibold transition"
        >
          Add Advertisement
        </button>
      </form>

      {/* Image Preview */}
      <div className="hidden md:block w-full max-w-sm p-4">
        {imageWatch?.[0] ? (
          <img
            src={URL.createObjectURL(imageWatch[0])}
            alt="Preview"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        ) : (
          <div className="w-full h-[300px] bg-pink-50 border border-dashed border-pink-200 flex items-center justify-center rounded-md text-gray-400 text-center p-4">
            Image preview will show here after selection
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAd;
