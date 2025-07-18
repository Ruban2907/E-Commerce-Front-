import React from "react";

const categories =  [
    {img: "public/assets/ayp1.png"},
    {img: "public/assets/ayp2.png"},
    {img: "public/assets/ayp3.png"},
    {img: "public/assets/ayp4.png"},
    {img: "public/assets/ayp5.png"},

]
const featured = [
    {
        title: "Complimentary SHipping",
        img: "public/assets/dice.png",
        button: "Enjoy free shipping on U.S. orders over $100.",
    },
    {
        title: "Conciously Crafted",
        img: "public/assets/hanger.png",
        button: "Designed with you and the planet in mind.",
    },
    {
        title: "Come say HI",
        img: "public/assets/loc.png",
        button: "We have 11 stores across the U.S.",
    },
]

const Everlane = () => {
    return (
        <div className="py-20 bg-white">
            <h2 className="text-2xl font-medium text-center mb-10">EverLane On You</h2>
            <p className="text-2xl font-medium text-center mb-2">Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
            <p className="text-2xl font-medium text-center underline mb-10">Add Photo</p>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-4 px-8">
                {categories.map((cat) => (
                    <div className="flex flex-col items center w-full" >
                        <img src = {cat.img} alt={cat.Pname}
                            className="w-full h-86 object-cover rounded-md shadow-sm mb-3" />  
                    </div>
                ))}
            </div>
        <div className="py-20">
        <div className="grid lg:grid-cols-3 items-center md:grid-cols-2 sm:grid-cols-1 justify-center gap-2 px-8">
          {featured.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center w-80 h-80  rounded-md px-10"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 mb-2"
              />
              <div className="flex flex-col text-center items center w-full">
                <h2 className="text-sm tracking-widest font-medium underline underline-offset-4 cursor-pointer mb-1">
                  {item.title}
                </h2>
                <p className="text-sm tracking-widest font-medium">
                  {item.button}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Everlane;