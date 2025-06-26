import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  apiDeleteVendorAd,
  apiGetSingleVendorAd,
} from "../../services/adverts";
import { toast } from "react-toastify";

const ViewAd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ad, setAd] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchSingleAd = async () => {
    setLoading(true);
    try {
      const res = await apiGetSingleVendorAd(id);
      setAd(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleAd();
  }, []);

  const handleEdit = () => navigate(`/dashboard/edit-ad/${ad.adID}`);

  const handleDelete = async () => {
    try {
      const res = await apiDeleteVendorAd(id);
      toast.success(res.data.message);
      navigate("/dashboard/adverts");
    } catch (error) {
      console.error(
        "Error deleting ad:",
        error.response?.data || error.message
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-pink-50">
        <p className="text-xl font-semibold text-pink-700">Ad is Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 w-full max-w-5xl">
        <div className="h-[300px] md:h-auto overflow-hidden">
          <img
            src={ad.imageURL}
            alt={ad.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-pink-700 mb-2">
              {ad.title}
            </h2>
            <p className="text-gray-700 mb-4">{ad.description}</p>

            <div className="mb-3">
              <span className="font-semibold text-gray-800">Categories:</span>
              <span className="text-sm text-gray-600 ml-1">
                {Array.isArray(ad.category)
                  ? ad.category.join(", ")
                  : ad.category}
              </span>
            </div>

            <p className="text-xl font-bold text-pink-700 mb-4">${ad.price}</p>
          </div>

          <div className="flex gap-4 mt-6 w-full justify-between">
            <button
              onClick={handleEdit}
              className="cursor-pointer min-w-16 w-48 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow transition-all"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="cursor-pointer min-w-16 w-48 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-lg shadow transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAd;
