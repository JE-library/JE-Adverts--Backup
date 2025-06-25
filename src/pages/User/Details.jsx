import React from "react";
import { apiGetSingleUserAd } from "../../services/adverts";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [ad, setAd] = useState({});

  const fetchSingleAd = async () => {
    setLoading(true);
    try {
      const res = await apiGetSingleUserAd(id);
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

  return (
    <div>
      {loading ? (
        <div className="min-h-[90vh] flex flex-col items-center">
          <p className="text-2xl font-semibold">Loading....</p>
        </div>
      ) : (
        <section
          id="ad-details"
          class="min-h-[80vh] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] px-24 py-8 bg-[rgb(243,243,243)]"
        >
          <div
            id="image"
            className="min-h-[40vh] max-h-[500px] bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.233)] overflow-hidden transition-all duration-200 ease-in hover:p-[0.1rem] hover:shadow-[-7px_0_20px_white,inset_0_0_15px_rgba(0,0,0,0.233)]"
          >
            <img
              src={ad.imageURL}
              alt="ad-image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4 md:p-8 flex flex-col justify-evenly">
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(196,69,118)]">
              Product:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {ad.title}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(196,69,118)]">
              Category:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {ad.category}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(196,69,118)]">
              Description:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {ad.description}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(196,69,118)]">
              Price:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {ad.price}
              </span>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Details;
