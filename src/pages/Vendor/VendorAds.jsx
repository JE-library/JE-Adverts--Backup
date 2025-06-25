import { useEffect, useState } from "react";
import { apiDeleteVendorAd, apiFetchVendorAds } from "../../services/adverts";
import { useNavigate } from "react-router";
import logo from "../../assets/LOGO.png";

function VendorAds() {
  const [loading, setLoading] = useState(false);
  const [vendorAds, setVendorAds] = useState([]);
  const navigate = useNavigate();

  const fetchVendorAds = async () => {
    setLoading(true);
    try {
      const res = await apiFetchVendorAds();
      console.log(res.data.data);
      setVendorAds(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendorAds();
  }, []);

  return (
    <section className="w-full ">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">
        Vendor Ads
      </h2>

      {loading ? (
        <div className="min-h-[90vh] flex flex-col items-center">
          <img src={logo}></img>
          <p className="text-2xl font-semibold">Loading....</p>
        </div>
      ) : !vendorAds ? (
        <div className="m-4 flex flex-col justify-center items-center text-center">
          <p className="text-[2rem] font-normal text-[rgb(170,1,35)]">
            Book Not Found!!
          </p>
          <img src={logo}></img>
        </div>
      ) : (
        <div className=" mt-8 px-16 py-4 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 rounded-[10px]">
          {vendorAds.map((vendorAd) => (
            <div
              key={vendorAd.id}
              className="bg-white border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 h-[450px] rounded-[10px] flex flex-col justify-center gap-2 transition-all duration-150 ease-in hover:border-black hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:h-[430px]"
            >
              <div className="shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] rounded-[10px] min-h-[240px] max-h-[240px] transition-all duration-150 ease-in hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.267)]">
                <img
                  src={vendorAd.imageURL}
                  alt="book-image"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="h-full p-2 flex flex-col justify-between">
                <h2 className=" text-[1.2rem] font-semibold text-[rgb(0,0,41)] line-clamp-2">
                  {vendorAd.title}
                </h2>

                <p className="author text-base font-medium text-[rgb(114,161,4)] line-clamp-1">
                  Price: {vendorAd.price}
                </p>

                <p className="genre text-sm font-medium text-[rgb(59,59,65)] line-clamp-1">
                  Category: {vendorAd.category}
                </p>

                <div className="pt-2 flex justify-between">
                  <button
                    className="min-w-[70px] bg-[rgb(0,151,189)] px-2 py-[0.1rem] rounded text-[0.9rem] font-medium text-white hover:opacity-80 cursor-pointer"
                    onClick={() =>
                      navigate(`/dashboard/adverts/${vendorAd.adID}`)
                    }
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default VendorAds;
