import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { apiEditVendorAds, apiGetSingleVendorAd } from "../../services/adverts";
import { useForm } from "react-hook-form";

const EditAd = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [ad, setAd] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      title: ad.title,
      description: ad.description,
      category: ad.category,
      price: ad.price,
    },
  });

  const fetchSingleAd = async () => {
    setLoading(true);
    try {
      const res = await apiGetSingleVendorAd(id);
      setAd(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSingleAd();
  }, []);

  const handleEdit = async (data) => {
    try {
      const res = await apiEditVendorAds(id, data);
      toast.success(res.data.message);
      navigate(`/dashboard/adverts/${id}`);
    } catch (error) {
      console.error(
        "Error deleting ad:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Advertisement</h2>

      {loading && <p>Loading...</p>}

      <form onSubmit={handleSubmit(handleEdit)}>
        <div className="mb-4">
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Category:</label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Edit Ad
        </button>
      </form>
    </div>
  );
};
export default EditAd;
