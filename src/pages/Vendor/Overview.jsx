import { useState } from "react";

const Overview = () => {
  const [openCategory, setOpenCategory] = useState(null);

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

  const toggleDropdown = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="space-y-10 w-full">
      {/* Categories with Dropdown */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => toggleDropdown(index)}
                className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-amber-200"
              >
                {cat.name}
              </div>

              {openCategory === index && (
                <ul className="absolute top-full mt-2 bg-white border border-gray-200 shadow-md rounded-md p-2 z-10 space-y-1 w-40">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 hover:bg-amber-100 cursor-pointer text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-red-300 p-6 rounded shadow text-center"
            >
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-gray-500">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Top Brands This Month</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 bg-gray-50">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="rounded-md shadow-sm p-6 bg-red-300 flex items-center justify-center hover:shadow-md transition"
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
