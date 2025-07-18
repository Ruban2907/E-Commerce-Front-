import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white ">
      <div className="w-full relative h-64 flex items-center justify-center px-8">
        <img src="public\assets\cta.png" alt="please forgive me" className="rounded-lg" />
         <div className="w-full absolute flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Special Offer Just For You!</h2>
        <p className="text-white mb-6">Discover our latest collection and enjoy exclusive discounts. Don't miss out on this limited-time opportunity to upgrade your style!</p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Shop Now</button>
      </div>
      </div>
     
    </div>
  );
};

export default Cta; 