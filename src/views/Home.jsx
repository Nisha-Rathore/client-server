import React from "react";
import Layout from "../components/Layout";


const Home = () => {
  return (
    <Layout>
      <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <h3 className="text-lg font-bold mb-4">Welcome to the Dashboard 🎉</h3>
        <p className="text-gray-600">
          This is your main content area. You can add cards, tables, or charts
          here.
        </p>
      </main>
    </Layout>
  );
};

export default Home;