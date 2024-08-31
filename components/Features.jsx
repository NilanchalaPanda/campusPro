import { Brain, ChartArea, Mic, University } from "lucide-react";
import React from "react";
import { FaFingerprint, FaMoon } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";

const Features = () => {
  const containerStyles = "py-10 bg-white sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12";
  const itemStyles = "flex flex-col items-center";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={gridStyles}>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-blue-100 flex items-center justify-center rounded-full">
              <ChartArea color="blue" size={35}/>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-black">
              Chatbot
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              An Ai Chatbot that has access to all the polytechnic and engineering colleges in rajasthan
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-orange-100 flex items-center justify-center rounded-full">
              <Mic color="orange" size={35}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
                Voice Assistant
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Experience lightning-fast queries with our voice assistance.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-green-100 flex items-center justify-center rounded-full">
              <University color="green" size={35}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              College Recommendations
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Our model will recommend you colleges according to your preferences
            </p>
          </div>

          <div className={itemStyles}>
            <div className="h-20 w-20 bg-red-100 flex items-center justify-center rounded-full">
              <Brain color="red" size={35}/>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Industry leading LLM
            </h3>
            <p className="mt-4 text-sm text-gray-600">
Our LLM Model can scrape data off websites and use it as context to answer your questions            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
