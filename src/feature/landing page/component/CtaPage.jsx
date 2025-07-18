import React from "react";

const content = {image :  "public/assets/kala.png"}

const TestimonialPage = () => {
  return (
    <div className="min-h-screen flex items-stretch bg-white">
      <div className="w-full h-[550px] md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16">
        <div>
          <p className="text-gray-700 mb-6">People Are Talking</p>
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-black text-xl mr-1">★</span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light mb-8 text-black">“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”</blockquote>
          <p className="text-gray-700 text-base">
            -- JonSnSF,{' '}
            <a href="#" className="underline">The Heavyweight Overshirt</a>
          </p>
        </div>
      </div>
      <div className="">

          <img src={content.image} alt="Testimonial" className="h-[550px]"/>
  
      </div>
    </div>
  );
};

export default TestimonialPage; 