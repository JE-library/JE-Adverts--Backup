import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Skincare",
    image: "https://cdn.pixabay.com/photo/2018/01/15/14/05/cosmetics-3084006_960_720.jpg",
  },
  {
    title: "Makeup",
    image: "https://cdn.pixabay.com/photo/2019/01/01/22/50/makeup-3907712_640.jpg",
  },
  {
    title: "Haircare",
    image: "https://cdn.pixabay.com/photo/2015/05/05/16/59/cosmetics-754044_960_720.jpg",
  },
  {
    title: "Fragrances",
    image: "https://cdn.pixabay.com/photo/2017/01/19/04/38/fragrance-1991531_960_720.jpg",
  },
  {
    title: "Nailcare",
    image: "https://cdn.pixabay.com/photo/2019/12/09/07/42/nail-4682904_1280.jpg",
  },
  {
    title: "Beauty Tools",
    image: "https://cdn.pixabay.com/photo/2019/08/23/05/57/makeup-4424970_640.jpg",
  },
  {
    title: "Wellness",
    image: "https://cdn.pixabay.com/photo/2015/12/06/18/28/capsules-1079838_960_720.jpg",
  },
];

const VendorAds = () => {
  return (
    <section className="p-10 bg-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-700">Vendor Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard key={index} title={cat.title} image={cat.image} />
  ))};
      </div>
    <div className="pt-2 flex justify-between">
      <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-[0.1rem] rounded-[0.3rem] text-[0.9rem] font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-80 cursor-pointer">
                           
                      
                      View
                    </button>
      <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-[0.1rem] rounded-[0.3rem] text-[0.9rem] font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-80 cursor-pointer">
                            
                  
                      
                      Edit
                    </button>
      <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-[0.1rem] rounded-[0.3rem] text-[0.9rem] font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-80 cursor-pointer">
                            
                  
                      
                      Delete 
                    </button>
    </div>
      
    </section>
  );
};

export default VendorAds;
