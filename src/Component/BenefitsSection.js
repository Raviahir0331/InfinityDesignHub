import React, { useState } from "react";
import data from "../data/benefits.json"; // Import JSON data

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index); // Expand new item
    }
  };

  return (
    <section className="bg-gray-100 py-10 container">
      <div className="container mx-auto flex flex-wrap">
        {/* Left Column - Text */}
        <div className="w-full md:w-1/2 px-10">
          <div className="mb-4">
            <span className="text-orange-500">OUR BENEFITS</span>
            <h3 className="text-4xl font-bold mt-2 mb-3">
              Unlock Revenue Growth for Your Business
            </h3>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {data.benefits.map((benefit, index) => (
              <div key={index}>
                {/* Title with dynamic + or - sign */}
                <h4
                  className={`cursor-pointer text-xl font-semibold py-2 flex items-center  hover:text-orange-500 hover:transition hover:duration-1000 ease-in-out  ${
                    activeIndex === index ? "text-orange-600" : "text-gray-800"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="mr-2 text-orange-600">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                  {benefit.title}
                </h4>

                {/* Collapsible content with animation */}
                <div
                  className={`overflow-hidden transition-max-height duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-600 mt-2">
                    {activeIndex === index && <p>{benefit.content}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 px-4 flex justify-center">
          <img
            src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/home1_arrow_bg.png"
            alt="Business Growth"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
