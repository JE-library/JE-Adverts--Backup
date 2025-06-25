// impor
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
      console.log(res.data.data);
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

  if (loading) {
    return <div className="p-10 text-center ">Ad is Loading...</div>;
  }

  const handleEdit = () => {
    navigate(`/dashboard/edit-ad/${ad.adID}`);
  };

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
  return (
    <div className="min-h-screen bg-amber-100 p-10 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <img
          src={ad.imageURL}
          alt={ad.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold text-amber-700 mb-2">{ad.title}</h2>
        <p className="text-gray-700 mb-2">{ad.description}</p>
        <p className="text-gray-800 font-medium mb-1">
          Category: {ad.category}
        </p>
        <p className="text-lg font-semibold text-amber-700 mb-4">${ad.price}</p>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAd;
