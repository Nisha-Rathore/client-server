import React from "react";

const ProductForm = () => {
  return (
    <form class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-1">Category</label>
        <input
          type="text"
          placeholder="Enter your category"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Size</label>
        <input
          type="text"
          placeholder="Enter your size"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Price</label>
        <input
          type="text"
          placeholder="Enter your price"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;