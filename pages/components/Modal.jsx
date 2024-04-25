import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, createCPSession,createCPSession2 }) => {
  const [activeTab, setActiveTab] = useState(1);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-100">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
              <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold ">Choose a project</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <ul className="flex border-b">
                  <li
                    className={`-mb-px mr-1 ${
                      activeTab === 1
                        ? "border-l border-t border-r rounded-t border-blue-500 bg-green-500 text-white"
                        : "border-l border-t border-r rounded-t border-gray-300 bg-gray-200 text-gray-600"
                    }`}
                  >
                    <a
                      href="#"
                      className="inline-block py-2 px-4 font-semibold"
                      onClick={() => toggleTab(1)}
                    >
                      Wind<span className="ml-2">Energy</span>
                    </a>
                  </li>
                  <li
                    className={`-mb-px mr-1 ${
                      activeTab === 2
                        ? "border-l border-t border-r rounded-t border-blue-500 bg-green-500 text-white"
                        : "border-l border-t border-r rounded-t border-gray-300 bg-gray-200 text-gray-600"
                    }`}
                  >
                    <a
                      href="#"
                      className="inline-block py-2 px-4 font-semibold"
                      onClick={() => toggleTab(2)}
                    >
                      Solar<span className="ml-2">Energy</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                {activeTab === 1 && (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="/images/windmill.jpg"
                        alt="Product 1"
                        className="rounded"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">Wind Power</h3>
                      <p className="text-gray-600 mt-4">
                        Harnessing the power of wind, wind energy offers a clean
                        and renewable solution for sustainable electricity
                        generation.
                      </p>
                    </div>
                    <button
                      className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full mt-4"
                      onClick={createCPSession}
                    >
                      Donate Now
                    </button>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="/images/solar4.jpg"
                        alt="Product 1"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold ">Solar Power</h3>
                      <p className="text-gray-600 mt-4">
                        Solar energy provides a sustainable solution for
                        powering our world with renewable electricity,
                        harnessing the sun's rays to fuel our future.
                      </p>
                    </div>
                    <button
                      className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full mt-4"
                      onClick={createCPSession2}
                    >
                      Donate Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
