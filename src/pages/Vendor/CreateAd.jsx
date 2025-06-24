import React, { useState } from 'react';

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send this to an API here
    console.log('Submitted Ad:', formData);
    setMessage('Advertisement submitted successfully!');
    setFormData({
      title: '',
      description: '',
      image: '',
      price: '',
      category: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-amber-100 p-6 gap-8">
      <form onSubmit={handleSubmit} className="bg-amber-200 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Post an Advertisement</h2>

        {message && <p className="text-green-700 font-semibold mb-4">{message}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Describe your product"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Product price"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select one</option>
            <option value="Beauty Tool">Beauty Tool</option>
            <option value="Nails">Nails</option>
            <option value="Hair Products">Hair Products</option>
            <option value="Makeup">Makeup</option>
            <option value="Wellness">Wellness</option>
            <option value="Fragrance">Fragrance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Advertisement
        </button>
      </form>

      <div className="w-full md:w-1/2">
        <img
          src={formData.image || "https://cdn.pixabay.com/photo/2017/06/18/14/01/shopping-2415820_1280.jpg"}
          alt="Product Preview"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CreateAd;
