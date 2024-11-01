import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImg from "../assets/HeroImg.png";

const Hero = () => {
  return (
    <section id="home" className="max-w-[1024px] mx-auto h-[100vh] flex items-center px-6 lg:px-0">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className=" pt-80 md:pt-0 text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Oghogho Marcus</span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-6 text-gray-300">
            <TypeAnimation
              sequence={["Fullstack Developer", 1000, "React And Nodejs", 1000]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
                color: "#D1D5DB",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="space-x-4 mt-8">
          <a
              href="/public/file/OGHOGHO MARCUS(1).pdf"
              download="OGHOGHO MARCUS(1).pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Download
            </a>
            <a
              href="mailto:damilolamarcus1@gmail.com"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-[80%] max-w-[300px] md:max-w-[400px] rounded-lg shadow-xl"
            style={{
              clipPath: "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
