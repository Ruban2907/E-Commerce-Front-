import React from "react";

const categories =  [
    {Pname: "SHIRTS",  img: "public/assets/shirts.png"},
    {Pname: "DENIM",  img: "public/assets/denim.png"},
    {Pname: "TEES",  img: "public/assets/tees.png"},
    {Pname: "PANTS",  img: "public/assets/pants.png"},
    {Pname: "SWEATERS",  img: "public/assets/sweater.png"},
    {Pname: "OUTWEARS",  img: "public/assets/jacket.png"},
]
const featured = [
    {
        title: "New Arrivals",
        img: "public/assets/someday.png",
        button: "SHOP THE LATEST",
    },
    {
        title: "Best-Sellers",
        img: "public/assets/everyday.png",
        button: "SHOP YOUR FAVOURITES",
    },
    {
        title: "The Holiday Outfit",
        img: "public/assets/holiday.png",
        button: "SHOP OCCASION",
    },
]

const ShopByCategory = () => {
    return (
        <div className="py-20 bg-white">
            <h2 className="text-2xl font-medium text-center mb-10">Shop by Category</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-4 px-8">
                {categories.map((cat) => (
                    <div key={cat.Pname} className="flex flex-col items center w-full" >
                        <img src = {cat.img} alt={cat.Pname}
                            className="w-full h-86 object-cover rounded-md shadow-sm mb-3" />
                        <span className="text-sm tracking-widest font-medium underline underline-offset-4 cursor-pointer">
                            {cat.Pname}
                        </span>  
                    </div>
                ))}
            </div>
        <div className="py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 px-8">
          {featured.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center w-full h-[600px] overflow-hidden rounded-md shadow group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl font-semibold mb-6 drop-shadow-lg text-center">
                  {item.title}
                </h2>
                <button className="bg-white text-black px-8 py-2 font-medium text-base rounded-none tracking-wide shadow hover:bg-gray-100 transition">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default ShopByCategory;