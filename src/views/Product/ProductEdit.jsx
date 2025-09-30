import React from "react";
import Layout from "../../components/Layout";
import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";


const ProductEdit = () => {
  const { productId } = useParams();
  return (
    <Layout>
      <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <div class="bg-white shadow-md rounded-lg p-6 mb-10">
          <div>
            <h2 class="text-xl font-bold mb-4">Edit Product</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProductForm />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProductEdit;