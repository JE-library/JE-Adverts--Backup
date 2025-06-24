import { useEffect, useState } from "react";
import axios from "axios";

const VendorAds = () => {
  const [items, setItems] = useState([]); // Holds the ads/categories
  const [loading, setLoading] = useState(false); // Loading state

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://je-advertisement-backend.onrender.com/api/vendor/ads");
      setItems(response.data); // Save API data
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(); // Call fetch when page loads
  }, []);

  return (
    <section className="p-10 bg-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">Vendor Ads</h2>

      {loading ? (
        <p className="text-center">Loading ads...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white shadow rounded p-4 text-center">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="flex justify-center gap-4 pt-2">
                <button className="border border-pink-500 bg-pink-100 px-4 py-1 rounded text-pink-600 hover:bg-pink-500 hover:text-white">View</button>
                <button className="border border-blue-500 bg-blue-100 px-4 py-1 rounded text-blue-600 hover:bg-blue-500 hover:text-white">Edit</button>
                <button className="border border-red-500 bg-red-100 px-4 py-1 rounded text-red-600 hover:bg-red-500 hover:text-white">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VendorAds;
