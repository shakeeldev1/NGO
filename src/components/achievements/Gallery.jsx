import React, { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Education",
    "Health",
    "Blood Donation",
    "Plantation",
    "Workshops",
    "Distribution",
    "Community Meetings",
    "Youth Empowerment", 
  ];

  const photos = [
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600",
      category: "Education",
    },
    {
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600",
      category: "Health",
    },
    {
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=600",
      category: "Blood Donation",
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600",
      category: "Plantation",
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
      category: "Workshops",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
      category: "Distribution",
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600",
      category: "Community Meetings",
    },
    {
     
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600",
      category: "Youth Empowerment",
    },
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <section className="bg-white py-12 px-5 w-full box-border font-sans">
      
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-14 h-[1.5px] bg-[#006837]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#006837]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center tracking-wide">
            Our Work in Action
          </h2>
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#006837]"></div>
            <div className="w-14 h-[1.5px] bg-[#006837]"></div>
          </div>
        </div>
    
      <div className="flex justify-center items-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 border ${
              activeCategory === category
                ? "border-[#00a878] bg-[#00a878] text-white shadow-sm"
                : "border-[#e0e8e4] bg-white text-[#45564f] hover:bg-slate-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            className="h-52 overflow-hidden rounded-lg bg-[#edf4f1] cursor-pointer group relative shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={photo.image}
              alt={photo.category}
              className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
              {photo.category}
            </div>

            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#00a878] hover:bg-[#008f67] text-white border-none rounded-lg px-8 py-2.5 text-xs font-bold tracking-wide transition-colors duration-200 shadow-sm cursor-pointer">
          View More Photos
        </button>
      </div>

    </section>
  );
};

export default Gallery;