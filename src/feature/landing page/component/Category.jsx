import React from "react";

const categories =  [
    {Pname: "The Waffle Long-Sleeve Crew", price:"$60", color:"Bone",  img: "public/assets/kameez.png"},
    {Pname: "The Bomber Jacket | Uniform", price:"$198", color:"Toased Coconut", img: "public/assets/shalwar.png"},
    {Pname: "The Slim 4-Way Stretch Organic Jean | Uniform", price:"$240", color:"Dark Indigo", img: "public/assets/vest.png"},
    {Pname: "The Essential Organic Crew", price:"$Muft", color:"Vintage Black", img: "public/assets/long-sleeve.png"},
]


const Category = () => {
    return (
        <div className="py-20 bg-white">
            <h2 className="text-2xl font-medium text-center mb-10">Everlane Favourites </h2>
            <p className="text-2xl font-medium text-center mb-10">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 justify-center items-center gap-4 px-8">
                {categories.map((cat) => (
                    <div key={cat.Pname} className="flex flex-col items center w-full" >
                        <img src = {cat.img} alt={cat.Pname}
                            className="h-[500px] object-cover rounded-md" />
                        <h1 className="text-sm tracking-widest font-medium underline underline-offset-4 cursor-pointer">
                            {cat.Pname}
                        </h1> 
                        
                        <p className="text-green-600 text-sm tracking-widest font-medium  cursor-pointer">{cat.price}</p> 
                        <p className="text-red-700  ">{cat.color}</p> 
                    </div>
                ))}
            </div>
    </div>
    );
};

export default Category;