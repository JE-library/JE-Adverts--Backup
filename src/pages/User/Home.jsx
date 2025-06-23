
const Home = () => {
  return (
    <div>
      <nav className="flex justify-between align-center py-5  bg-amber-300 ">
        <span>
          <strong>JE WEB</strong>
        </span>
        <ul className="flex space-x-5">
          <li>Home</li>
          <li>Categories</li>
          <li>store</li>
        </ul>
        <button>LOGIN</button>
      </nav>

      <h1 className="">Categories</h1>
      <ul className="flex flex-row justify-between align-center bg-blue-200">
        <li>Haircare</li>
        <li>Skincare</li>
        <li>Makeup Products</li>
        <li>Accessories</li>
        <li>Perfumes</li>
      </ul>

      <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search by category..."
            className="w-1/2 min-w-[250px] px-4 py-2 border border-[rgb(45,45,114)] rounded-[10px] placeholder:font-semibold"
          />
        </div>
      
      <div>
                <div className="shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] rounded-[10px] min-h-[240px] max-h-[240px] transition-all duration-150 ease-in hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.267)]">
                  <img
                    src={ad.image}
                    alt="ad-image"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="h-full p-2 flex flex-col justify-between">
                  <h2 className=" text-[1.2rem] font-semibold text-[rgb(0,0,41)] line-clamp-2">
                    {ad.title}
                  </h2>

                  
                  <p className="genre text-sm font-medium text-[rgb(59,59,65)] line-clamp-1">
                    Category: {ad.category}
                  </p>

                  <p className="text-sm font-medium text-[rgb(59,59,65)]">
                  {ad.price}
                  </p>

                  <div className="pt-2 flex justify-between">
                    <button
                      className="min-w-[70px] bg-[rgb(0,151,189)] px-2 py-[0.1rem] rounded text-[0.9rem] font-medium text-white hover:opacity-80 cursor-pointer"
                      onClick={() => navigate(`/detail/${ad.id}`)}
                    >
                      View 
                    </button>
                    </div>
                </div>
    
  );
};

export default Home;











                