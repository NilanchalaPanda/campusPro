"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const commonStyles = {
  button:
    "inline-flex items-center justify-center px-6 py-2 text-base font-semibold transition-all duration-200 rounded-lg",
  link: "text-base font-medium text-gray-800 transition-all duration-200 hover:text-indigo-600",
  sectionTitle: "text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl",
  sectionSubtitle: "mt-4 text-sm sm:text-base font-normal leading-6 text-gray-500",
  listItem: "flex items-center",
  listItemIcon: "text-base ml-2.5 text-black",
  listItemText: "flex-1 text-base font-medium text-gray-900 ml-2.5",
  gradientButton:
    "relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
};

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative h-[70vh] md:h-[100vh] w-[100vw]">
      <section className="relative pb-12 bg-white pt-20 sm:pb-16 sm:pt-28 lg:pb-20 xl:pt-40 xl:pb-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full md:block"
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <div className="w-full md:max-w-xs lg:max-w-md">
              <h1 className={commonStyles.sectionTitle}>
                The Complete AI-based <br className="hidden md:block" /> College Chatbot
              </h1>
              <p className={commonStyles.sectionSubtitle}>
                The all-in-one platform for answering all your queries related to Engineering Colleges.
              </p>

              <div className="relative inline-flex mt-8 sm:mt-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="#"
                  className={commonStyles.gradientButton}
                  role="button"
                >
                  Get Started - It's free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
