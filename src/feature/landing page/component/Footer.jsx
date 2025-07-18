import React from 'react';

export default function LandingSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/footer-image.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Your Cozy Era</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-100">
          Get peak comfy-chic<br />with new winter essentials.
        </p>
        <button className="bg-white text-black px-8 py-2 font-medium text-base rounded-none tracking-wide shadow hover:bg-gray-100 transition">
          SHOP NOW
        </button>
      </div>
    </section>
  );
} 