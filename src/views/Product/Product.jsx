import React, { useEffect, useState } from "react";

import { products } from "../../Utils/data";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Product = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(products);
  }, []);

  console.log("list===", list);
  return (
    <Layout>
      <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <div class="bg-white shadow-md rounded-lg p-6 mb-10">
          <div className="flex justify-between items-center mb-3">
            <h2 class="text-xl font-bold mb-4">Product List</h2>
            <Link
              to="/prodcut/create"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition px-5"
            >
              Add New
            </Link>
          </div>
          <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead class="bg-gray-200 text-gray-700">
              <tr>
                <th class="px-4 py-2 text-left">#</th>
                <th class="px-4 py-2 text-left">Category</th>
                <th class="px-4 py-2 text-left">Name</th>
                <th class="px-4 py-2 text-left">Size</th>
                <th class="px-4 py-2 text-left">Price</th>
                <th class="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {list.map((item, index) => {
                return (
                  <tr>
                    <td class="px-4 py-2">{index + 1}</td>
                    <td class="px-4 py-2">{item.Category}</td>
                    <td class="px-4 py-2">{item.Name}</td>
                    <td class="px-4 py-2">{item.Size}</td>
                    <td class="px-4 py-2">{item.Price}</td>
                    <td class="px-4 py-2">
                      <Link
                        to={`/product/edit/${item.id}`}
                        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition px-2"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default Product;