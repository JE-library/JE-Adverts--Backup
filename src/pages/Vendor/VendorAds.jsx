import { useEffect, useState } from "react";
import {
  apiDeleteVendorAd,
  apiFetchVendorAds,
  apiSearchVendorAds,
} from "../../services/adverts";
import { useNavigate } from "react-router";
import logo from "../../assets/LOGO.png";

function VendorAds() {
  const [loading, setLoading] = useState(false);
  const [vendorAds, setVendorAds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchVendorAds = async () => {
    setLoading(true);
    try {
      const res = await apiFetchVendorAds();
      setVendorAds(res.data.data);
      setUsername(res.data.username);
    } catch (error) {
      console.error("Error fetching ads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendorAds();
  }, []);

  //SEARCH FOR ADS
  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      setLoading(true);
      try {
        const res = await apiSearchVendorAds({
          title: searchTerm,
        });
        setMessage(res.data.message);
        setVendorAds(res.data.data); // Adjust as needed
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // If cleared, refetch all ads
      try {
        const res = await apiSearchVendorAds();
        setVendorAds(res.data.data);
      } catch (error) {
        console.error("Error fetching all ads:", error);
      }
    }
  };

  return (
    <section className="w-full px-4 sm:px-12 py-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-pink-700">
        Welcome {username}, Here are your ads.
      </h2>
      <p className="text-center text-gray-600 text-base mb-6">
        Manage your current beauty listings, update them, or check their
        details.
      </p>
      <p className="text-center text-sm text-pink-500 mb-8">
        Tip: Engaging titles and clear images attract more views!
      </p>

      {/* //        Search Bar  */}
      <div className="flex justify-center items-center gap-4 flex-wrap px-4 mb-4">
        <input
          type="text"
          placeholder="Search by title ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 shadow rounded-full placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition"
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          {/* <img src={logo} className="w-20 mb-4" alt="Loading..." /> */}
          <p className="text-xl font-medium">Loading your ads...</p>
        </div>
      ) : vendorAds?.length === 0 ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-semibold text-rose-600 mb-2">
            No ads yet!
          </p>
          <p className="text-gray-600">
            Start by adding your first product today.
          </p>
          <img src={logo} className="w-28 mt-4" alt="No Ads" />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {vendorAds === null ? (
            <p className="text-2xl font-semibold text-rose-600 mb-2">
              {message}
            </p>
          ) : (
            vendorAds.map((vendorAd) => (
              <div
                key={vendorAd.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-pink-500"
              >
                <div className="h-[200px] overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center">
                  <img
                    src={vendorAd.imageURL}
                    alt={vendorAd.title}
                    className="object-contain h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {vendorAd.title}
                </h3>

                <p className="text-pink-600 font-medium mt-1 mb-2">
                  GHC{vendorAd.price}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {vendorAd.category?.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/adverts/${vendorAd.adID}`)
                    }
                    className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 ease-in-out hover:bg-pink-700 hover:scale-[1.02] cursor-pointer"
                  >
                    View Ad
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default VendorAds;
