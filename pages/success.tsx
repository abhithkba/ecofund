import type { NextPage } from "next";
import { FaLeaf, FaCheckCircle } from "react-icons/fa";

const Success: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <a href="#" title="" className="flex">
            <div className="flex items-center">
              <FaLeaf className="text-green-500 mr-2" size={50} />
              <span className="text-5xl font-bold text-gray-800">EcoFund</span>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-4" size={50} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Thank you for your donation!
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Your contribution to our crowdfunding campaign for clean energy and
          sustainable development has been successfully processed.
        </p>
        <p className="text-gray-600 text-center mb-8">
          Together, we can make a difference and create a greener, more
          sustainable future for all.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
