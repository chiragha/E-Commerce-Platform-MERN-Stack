import React from "react";

const PromoSection = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url("/make.avif")`, 
      }}
    >
      {/* Center Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center max-w-md shadow-xl">
        
        {/* Small Text */}
        <p className="text-xs tracking-widest text-gray-500 mb-3 uppercase">
          Hot & Spicy
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl italic font-semibold text-gray-800 mb-4 leading-tight">
          Most vibrant <br /> lips in town
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>

        {/* Button */}
        <button className="text-gray-800 font-medium border-b border-gray-800 hover:opacity-70">
          Shop now
        </button>

      </div>
    </section>
  );
};

export default PromoSection;