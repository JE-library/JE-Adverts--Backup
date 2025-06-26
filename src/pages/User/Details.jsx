import React, { useState, useEffect } from "react";
import { apiGetSingleUserAd } from "../../services/adverts";
import { useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [ad, setAd] = useState({});

  useEffect(() => {
    const fetchSingleAd = async () => {
      setLoading(true);
      try {
        const res = await apiGetSingleUserAd(id);
        setAd(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleAd();
  }, [id]);

  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4 md:px-24 flex items-center justify-center">
      {loading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-2xl font-semibold text-gray-700">Loading...</p>
        </div>
      ) : (
        <section className="w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-6 p-8">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-rose-100 rounded-lg p-4">
            <img
              src={ad.imageURL}
              alt="ad"
              className="w-full h-[400px] object-contain"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center text-left space-y-6">
            <h1 className="text-3xl font-bold text-rose-700">{ad.title}</h1>

            <p className="text-gray-700 text-base">
              <span className="font-semibold text-gray-800">Category:</span>{" "}
              {Array.isArray(ad.category)
                ? ad.category.join(", ")
                : ad.category}
            </p>

            <p className="text-gray-700 text-base">
              <span className="font-semibold text-gray-800">Description:</span>{" "}
              {ad.description}
            </p>

            <p className="text-xl font-bold text-rose-600">
              Price: ${parseFloat(ad.price).toFixed(2)}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Details;
