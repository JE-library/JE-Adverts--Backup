import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { apiEditVendorAds, apiGetSingleVendorAd } from "../../services/adverts";
import { useForm } from "react-hook-form";

const EditAd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchSingleAd = async () => {
      setLoading(true);
      try {
        const res = await apiGetSingleVendorAd(id);
        const adData = res.data.data;
        reset(adData); // ✅ This sets the form values
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleAd();
  }, [id, reset]);

  const handleEdit = async (data) => {
    try {
      const res = await apiEditVendorAds(id, data);
      toast.success(res.data.message);
      navigate(`/dashboard/adverts/${id}`);
    } catch (error) {
      console.error("Error editing ad:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Edit Advertisement
        </h2>

        {loading && (
          <p className="text-center text-pink-600 font-semibold mb-4">
            Loading ad details...
          </p>
        )}

        <form onSubmit={handleSubmit(handleEdit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Product title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">Title is required.</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Describe the product"
              rows={4}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required.</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Category</label>
            <select
              {...register("category", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select category</option>
              <option value="Beauty Tool">Beauty Tool</option>
              <option value="Nails">Nails</option>
              <option value="Hair Products">Hair Products</option>
              <option value="Makeup">Makeup</option>
              <option value="Wellness">Wellness</option>
              <option value="Fragrance">Fragrance</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">Category is required.</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Price (GHC)</label>
            <input
              type="number"
              step="0.01" // allows decimals
              {...register("price", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">Price is required.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-all"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAd;
