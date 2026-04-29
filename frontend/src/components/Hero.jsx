import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full h-[95vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url("/hero.avif")`,
      }}
    >
      {/* Overlay (optional for better text visibility) */}
      <div className="w-full h-full  flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          {/* Small Text */}
          <p className="text-sm tracking-widest mb-2 uppercase">
            New Release
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold italic mb-4">
            The Latest
in Streetwear Fashion
          </h1>

          {/* Description */}
          <p className="max-w-md text-sm md:text-base mb-6">
           This is a space to welcome visitors to your site.
          </p>

          {/* Button */}
          <button className="bg-blue-200 text-gray-800 px-6 py-2 rounded-md hover:bg-blue-300 transition">
            Shop now
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;