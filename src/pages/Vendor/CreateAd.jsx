import React from 'react'



const CreateAd = () => {
  return (
    <form className='bg-amber-200 p-8 rounded-lg shadow-lg w-full max-w-sm'> 
      <h2 className="text-2xl font-bold text-center mb-6"> AdForm</h2>
{/* 
      <div>
        <h4 className="block text-gray-700 mb-2">Sign Up As</h4>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          id=""
        >
          <option value="">Select one</option>
          <option value="">User</option>
          <option value="">Vendor</option>
        </select>
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Product"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Product Description</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your Product"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Image</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image Url"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=" $Product price"
          required
        />
      </div>
      <div>
        <h4 className="block text-gray-700 mb-2">Enter your category</h4>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          id=""
        >
          <option value="">Select one</option>
          <option value="">Beauty tool</option>
          <option value="">nails</option>
          <option value="">hair products</option>
          <option value="">makeup</option>
          <option value="">wellness</option>
          <option value="">fragrance</option>
        </select>
      </div> 

      <button
        type="Add"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
      
      </form>
  );
};

export default CreateAd