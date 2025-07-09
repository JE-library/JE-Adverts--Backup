import { apiFetchUserAds, apiSearchUserAd } from "../../services/adverts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState([]);
  const [message, setMessage] = useState("");
  // Define State
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // Price Value Mapping
  const priceValues = {
    lt10: 10,
    lt50: 50,
    lt150: 150,
    lt300: 300,
    gte500: 500,
  };

  const categories = [
    "Skincare",
    "Makeup",
    "Haircare",
    "Fragrances",
    "Nail Care",
    "Beauty Tools",
    "Wellness",
  ];

  useEffect(() => {
    // retrieve token from local storage
    const token = localStorage.getItem("accessToken");

    // if there is no token, take them to login
    if (!token) {
      navigate("/log-in");
    }
  }, []);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      try {
        const res = await apiFetchUserAds();
        // console.log(data);
        setAds(res.data.data);
        setUsername(res.data.username);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);
  //SEARCH FOR ADS
  const handleSearch = async () => {
    setLoading(true);
    try {
      const query = {};
      if (searchTerm.trim()) query.title = searchTerm.trim();
      if (categoryFilter) query.category = categoryFilter;
      if (priceRange) query.price = priceValues[priceRange];
      const res = await apiSearchUserAd(query);
      console.log(res.data);

      setMessage(res.data.message);
      setAds(res.data.data);
    } catch (error) {
      console.error("Filter error:", error);
    } finally {
      setLoading(false);
    }
  };

  //USER LOG OUT
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center py-5 px-10 bg-pink-700 text-white shadow">
        <Link to="/" className="text-xl font-bold min-w-28">
          JE- Adverts
        </Link>

        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="w-full"
        >
          <h3 className="text-xl font-bold text-pink-100">
            Welcome, {username}! 🎉 Check out our latest beauty deals and
            offers!
          </h3>
        </marquee>

        <button
          onClick={handleLogout}
          className="cursor-pointer bg-white text-pink-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition min-w-28"
        >
          Log Out
        </button>
      </nav>

      <div className="w-full flex flex-col md:flex-row gap-4 px-4 mt-6 justify-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-[250px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder:font-medium"
        />

        {/* Category Dropdown */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price Range Dropdown */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
        >
          <option value="">All Prices</option>
          <option value="lt10">Less than GHC 10</option>
          <option value="lt50">Less than GHC 50</option>
          <option value="lt150">Less than GHC 150</option>
          <option value="lt300">Less than GHC 300</option>
          <option value="gte500">GHC 500 or more</option>
        </select>

        {/* Filter Button */}
        <button
          onClick={handleSearch}
          className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          Filter
        </button>
      </div>

      {/* Main Content */}
      <div className="p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-800">
          Shop Our Products
        </h1>

        {/* Loader */}
        {loading ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            {/* <img src={logo}></img> */}
            <p className="text-2xl font-semibold text-gray-700">Loading...</p>
          </div>
        ) : !ads || ads.length === 0 ? (
          <div className="m-4 flex flex-col justify-center items-center text-center">
            {typeof message === "string" && (
              <p className="text-2xl font-semibold text-rose-600 mb-2">
                {message}
              </p>
            )}
            {/* <img src={logo}></img> */}
          </div>
        ) : (
          //Grid of Ads
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
            {ads.map((ad) => (
              <div
                key={ad.adID}
                className="bg-white border border-rose-100 rounded-xl shadow-sm p-4 flex flex-col justify-between transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:border-rose-200"
              >
                <div className="rounded-lg overflow-hidden h-60 bg-rose-50 flex items-center justify-center border border-rose-100">
                  <img
                    src={ad.imageURL}
                    alt="ad"
                    className="object-contain w-full h-full transition-transform duration-200 hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {ad.title}
                  </h2>

                  <p className="text-sm text-rose-600 font-medium line-clamp-1">
                    {Array.isArray(ad.category)
                      ? ad.category.join(", ")
                      : ad.category}
                  </p>

                  <p className="text-sm text-gray-700 line-clamp-2">
                    {ad.description}
                  </p>

                  <p className="text-base font-semibold text-blue-700">
                    Price: GHC{ad.price}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/details/${ad.adID}`)}
                    className="cursor-pointer w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-md font-medium transition"
                  >
                    View
                  </button>
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

/////////////////////////////////////////////////////////////////////////////////////////////////

// import { apiFetchUserAds, apiSearchUserAd } from "../../services/adverts";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import { Link } from "react-router";

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [ads, setAds] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // retrieve token from local storage
//     const token = localStorage.getItem("accessToken");

//     // if there is no token, take them to login
//     if (!token) {
//       navigate("/log-in");
//     }
//   }, []);

//   useEffect(() => {
//     const fetchAds = async () => {
//       setLoading(true);
//       try {
//         const res = await apiFetchUserAds();
//         // console.log(data);
//         setAds(res.data.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAds();
//   }, []);
//   //SEARCH FOR ADS
//   const handleSearch = async () => {
//     if (searchTerm.trim() !== "") {
//       setLoading(true);
//       try {
//         const res = await apiSearchUserAd({
//           title: searchTerm,
//           category: searchTerm,
//         });
//         setAds(res.data.data); // Adjust as needed
//       } catch (error) {
//         console.error("Search error:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       // If cleared, refetch all ads
//       try {
//         const res = await apiFetchUserAds();
//         setAds(res.data.data);
//       } catch (error) {
//         console.error("Error fetching all ads:", error);
//       }
//     }
//   };
//   // FILTER BY CATEGORY

//   //USER LOG OUT
//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     navigate("/log-in");
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="flex justify-between items-center py-5 px-10 bg-pink-700 text-white shadow">
//         <span className="text-xl font-bold">JE- Adverts</span>
//         <button
//           onClick={handleLogout}
//           className="cursor-pointer bg-white text-pink-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
//         >
//           Log Out
//         </button>
//       </nav>

//       {/* Search Bar */}
//       <div className="flex justify-center items-center gap-4 flex-wrap px-4 mt-10">
//         <input
//           type="text"
//           placeholder="Search by title or category..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-lg px-4 py-2 border border-gray-300 shadow rounded-full placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <button
//           onClick={handleSearch}
//           className="cursor-pointer bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition"
//         >
//           Search
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="p-10">
//         <h1 className="text-4xl font-bold text-center mb-8 text-pink-800">
//           Shop Our Products
//         </h1>

//         {/* Loader */}
//         {loading ? (
//           <div className="min-h-[60vh] flex flex-col items-center justify-center">
//             {/* <img src={logo}></img> */}
//             <p className="text-2xl font-semibold text-gray-700">Loading...</p>
//           </div>
//         ) : !ads || ads.length === 0 ? (
//           <div className="m-4 flex flex-col justify-center items-center text-center">
//             <p className="text-2xl font-medium text-pink-700">
//               Products Not Found!!
//             </p>
//             {/* <img src={logo}></img> */}
//           </div>
//         ) : (
//           //Grid of Ads
//           <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
//             {ads.map((ad) => (
//               <div
//                 key={ad.id}
//                 className="bg-white border border-rose-100 rounded-xl shadow-sm p-4 flex flex-col justify-between transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:border-rose-200"
//               >
//                 <div className="rounded-lg overflow-hidden h-60 bg-rose-50 flex items-center justify-center border border-rose-100">
//                   <img
//                     src={ad.imageURL}
//                     alt="ad"
//                     className="object-contain w-full h-full transition-transform duration-200 hover:scale-105"
//                   />
//                 </div>

//                 <div className="mt-4 flex flex-col gap-2">
//                   <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
//                     {ad.title}
//                   </h2>

//                   <p className="text-sm text-rose-600 font-medium line-clamp-1">
//                     {Array.isArray(ad.category)
//                       ? ad.category.join(", ")
//                       : ad.category}
//                   </p>

//                   <p className="text-sm text-gray-700 line-clamp-2">
//                     {ad.description}
//                   </p>

//                   <p className="text-base font-semibold text-gray-800">
//                     Price: Ghc{ad.price}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   <button
//                     onClick={() => navigate(`/details/${ad.adID}`)}
//                     className="cursor-pointer w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-md font-medium transition"
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
