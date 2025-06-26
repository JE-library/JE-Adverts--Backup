import { useState } from "react";

const Overview = () => {

  const categories = [
    {
      name: "Skincare",
      items: ["Nivea", "Neutrogena", "The Ordinary"],
    },
    {
      name: "Makeup",
      items: ["MAC", "Fenty Beauty", "Maybelline"],
    },
    {
      name: "Haircare",
      items: ["Cantu", "Dark & Lovely", "Shea Moisture"],
    },
    {
      name: "Fragrances",
      items: ["Dior", "Chanel", "Zara Scents"],
    },
    {
      name: "Nailcare",
      items: ["Essie", "OPI", "Sally Hansen"],
    },
    {
      name: "Beauty Tools",
      items: ["Beauty Blender", "Makeup Brushes", "Facial Roller"],
    },
    {
      name: "Wellness",
      items: ["Body Oils", "Essential Oils", "Supplements"],
    },
  ];

  const stats = [
    { title: "Total Ads", value: 23 },
    { title: "Total Views", value: 540 },
    { title: "Pending Ads", value: 4 },
  ];

  const brands = [
    { logo: "https://logowik.com/content/uploads/images/dior3907.jpg" },
    {
      logo: "https://logowik.com/content/uploads/images/t_fenty-beauty9929.logowik.com.webp",
    },
    {
      logo: "https://logowik.com/content/uploads/images/t_palmolive-old8896.logowik.com.webp",
    },
    { logo: "https://logowik.com/content/uploads/images/t_pz-cussons5275.jpg" },
    { logo: "https://logowik.com/content/uploads/images/t_239_nivea.jpg" },
  ];

 

  return (
    <div className="space-y-12 w-full px-4 sm:px-8 py-6">
      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="relative">
              <button
              
                className="cursor-pointer bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-pink-200 transition"
              >
                {cat.name}
              </button>

              
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section>
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="cursor-pointer bg-pink-100 p-6 rounded-xl text-center shadow-md"
            >
              <p className="text-2xl font-bold text-pink-700">{stat.value}</p>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section>
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Top Brands This Month</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg p-4 flex items-center justify-center transition"
            >
              <img
                src={brand.logo}
                alt={`Brand ${index}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;
