import type { NextPage } from "next";
import { FaExclamationTriangle, FaLeaf } from 'react-icons/fa';

const Cancel: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100">
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
          <FaExclamationTriangle className="text-red-500 mr-4" size={50} />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Payment Cancelled</h2>
        <p className="text-gray-700 text-center mb-6">
          There was an issue processing your payment for the crowdfunding campaign. Please try again later.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Back to Home
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Cancel;
