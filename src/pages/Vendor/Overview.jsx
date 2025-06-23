import React from "react";

const Overview = () => {
 
  const stats = [
    { title: "Total Ads", value: 12 },
    { title: "Active Ads", value: 7 },
    { title: "Total Views", value: 430 },
    { title: "Clicks", value: 122 },
  ];

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="text-2xl font-semibold text-blue-600">{item.value}</p>
          </div>
        ))}
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">Recent Ads</h2>
        <ul className="space-y-3">
          <li className="border-b pb-2">Ad #1 – “Summer Discount Promo”</li>
          <li className="border-b pb-2">Ad #2 – “Flash Sale Electronics”</li>
          <li className="border-b pb-2">Ad #3 – “New Arrival Tees”</li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
