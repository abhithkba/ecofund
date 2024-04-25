import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import Modal from "./Modal";

const HeroSection = ({ createCPSession,createCPSession2 }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div class="bg-white">
      <header class="bg-[#FCF8F1] bg-opacity-30">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <div className="flex items-center">
                  <FaLeaf className="text-green-500 mr-2" size={35} />
                  <span className="text-3xl font-bold text-gray-800">
                    EcoFund
                  </span>
                </div>
              </a>
            </div>

           

            <button
              title=""
              class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-green-500 hover:text-white font-semibold text-white bg-green-600 rounded-full"
              role="button"
              onClick={openModal}
            >
              {" "}
              Donate{" "}
            </button>
          </div>
        </div>
      </header>

      <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p class="text-base font-semibold tracking-wider text-green-600 uppercase">
                A crowdfund for those shaping a sustainable future.
              </p>
              <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Fund a <span className="text-green-600">Greener</span> tomorrow
              </h1>
              <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Join our crypto crowdfunding platform and play a vital role in
                advancing global sustainable development and clean energy
                solutions.
              </p>

              <button
                onClick={openModal}
                title=""
                class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-green-600 rounded-full lg:mt-16 hover:bg-green-500 "
                role="button"
              >
                Donate for better tomorrow
                <svg
                  class="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              
            </div>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              createCPSession={createCPSession}
              createCPSession2={createCPSession2}
            />
            <div>
              <img class="w-full" src="/images/green.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
