import React from "react";

import ProductForm from "./ProductForm";
import Layout from "../../components/Layout";

const ProductCreate = () => {
  return (
    <Layout>
      <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <div class="bg-white shadow-md rounded-lg p-6 mb-10">
          <div>
            <h2 class="text-xl font-bold mb-4">Create New Product</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProductForm />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProductCreate;