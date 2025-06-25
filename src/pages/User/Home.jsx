import { apiFetchUserAds } from "../../services/adverts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { apiSearchUserAd } from "../../services/adverts";
import { Link } from "react-router";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      try {
        const res = await apiFetchUserAds();
        // console.log(data);
        setAds(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      setLoading(true);
      try {
        const res = await apiSearchUserAd({
          title: searchTerm,
          category: searchTerm,
        });
        setAds(res.data.data); // Adjust as needed
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // If cleared, refetch all ads
      try {
        const res = await apiFetchUserAds();
        setAds(res.data.data);
      } catch (error) {
        console.error("Error fetching all ads:", error);
      }
    }
  };

  return (
    <div>
      <nav className="flex justify-between align-center py-5  bg-[rgb(185,66,92)] ">
        <span>
          <strong>JE ADS</strong>
        </span>
        <ul className="flex space-x-5">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>Categories</li>
          <li>store</li>
        </ul>
        <button>LOGIN</button>
      </nav>

      <div className="w-full flex justify-center">
        <form action=""></form>
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 min-w-[250px] px-4 py-2 border border-[rgb(77,77,122)] mt-[30px] shadow-[0_0_15px_rgba(0,0,0,0.233)] rounded-[20px] placeholder:font-semibold"
        />
        <button
          onClick={handleSearch}
          className="w-[150px] bg-gray-600 text-white mt-[30px] p-[10px] justify-center rounded-[20px] hover:bg-emerald-500 transition duration-200"
          id="button"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center mb-6"></div>
      <div className="p-10 bg-gray">
        <h1 className="font-outfit text-[2.8rem] font-normal text-center">
          Shop Our Products
        </h1>
        {/* <div className="w-full flex justify-center">
          {" "}
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-1/2 min-w-[250px] px-4 py-2 border border-[rgb(45,45,114)] rounded-[10px] placeholder:font-semibold"
            onChange={(e) => {
              setsearchQ(e.target.value);
              SearchBooks(searchQ);
            }}
          />
        </div> */}
        {loading ? (
          <div className="min-h-[90vh] flex flex-col items-center">
            {/* <img src={logo}></img> */}
            <p className="text-2xl font-semibold">Loading....</p>
          </div>
        ) : !ads ? (
          <div className="m-4 flex flex-col justify-center items-center text-center">
            <p className="text-[2rem] font-normal text-[rgb(170,1,35)]">
              Products Not Found!!
            </p>
            {/* <img src={logo}></img> */}
          </div>
        ) : (
          <div className=" mt-8 px-16 py-4 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 rounded-[10px]">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="bg-white border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 h-[450px] rounded-[10px] flex flex-col justify-center gap-2 transition-all duration-150 ease-in hover:border-black hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:h-[430px]"
              >
                <div className="shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] rounded-[10px] min-h-[240px] max-h-[240px] transition-all duration-150 ease-in hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.267)]">
                  <img
                    src={ad.imageURL}
                    alt="ad-image"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="h-full p-2 flex flex-col justify-between">
                  <h2 className=" text-[1.2rem] font-semibold text-[rgb(0,0,41)] line-clamp-2">
                    {ad.title}
                  </h2>

                  <p className="category text-base font-medium text-[rgb(196,69,118)] line-clamp-1">
                    {ad.category}
                  </p>

                  <p className="description text-sm font-medium text-[rgb(59,59,65)] line-clamp-1">
                    {ad.description}
                  </p>

                  <p className="text-sm font-medium text-[rgb(59,59,65)]">
                    Price: {ad.price}
                  </p>
                  <div className="pt-2 flex justify-between">
                    <button
                      className="min-w-[70px] bg-[rgb(0,151,189)] px-2 py-[0.1rem] rounded text-[0.9rem] font-medium text-white hover:opacity-80 cursor-pointer"
                      onClick={() => navigate(`/details/${ad.adID}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
