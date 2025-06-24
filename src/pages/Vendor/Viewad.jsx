// impor
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";

const dummyAds = [
  {
    id: 1,
    title: "Fenty Lipstick",
    description: "Long-lasting matte lipstick.",
    image: "https://cdn.pixabay.com/photo/2019/08/23/05/57/makeup-4424970_640.jpg",
    price: 60,
    category: "Makeup",
  },
  {
    id: 2,
    title: "Shea Butter Cream",
    description: "Moisturizer for dry skin.",
    image: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_960_720.jpg",
    price: 40,
    category: "Skincare",
  },
];

const ViewAd = () => {

const {id} = useParams
  const navigate = useNavigate();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const found = dummyAds.find((a) => a.id === parseInt(id));
    setAd(found);
  }, [id]);

  if (!ad) {
    return <div className="p-10 text-center text-red-600">Advertisement not found</div>;
  }

  const handleEdit = () => {
    navigate(`/ads/${ad.id}/edit`);
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this ad?");
    if (confirmed) {
      // Simulate delete logic here
      alert("Ad deleted (you'd remove it from the database)");
      navigate("/vendor-dashboard"); // change to your actual dashboard route
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 p-10 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <img src={ad.image} alt={ad.title} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-3xl font-bold text-amber-700 mb-2">{ad.title}</h2>
        <p className="text-gray-700 mb-2">{ad.description}</p>
        <p className="text-gray-800 font-medium mb-1">Category: {ad.category}</p>
        <p className="text-lg font-semibold text-amber-700 mb-4">${ad.price}</p>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Ad
          </button>
          {/* <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Ad
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ViewAd;
