import React from "react";



const Category = () => {

  const allProducts = [
    {
      id: 2,
      img: "https://i.ibb.co/4tcM9Lr/image-2.png",
      subc: ["m1", "m2", "m3"],
      text: "Rice Mill Manufacturing Machine",
    },
    {
      id: 3,
      img: "https://i.ibb.co/4tcM9Lr/image-2.png",
      subc: ["m1", "m2", "m3"],
      text: "Rice Mill Manufacturing Machine",
    },
    {
      id: 1,
      img: "https://i.ibb.co/4tcM9Lr/image-2.png",
      subc: ["m1", "m2", "m3"],
      text: "Rice Mill Manufacturing Machine",
    },
    {
      id: 4,
      img: "https://i.ibb.co/4tcM9Lr/image-2.png",
      subc: ["m1", "m2", "m3"],
      text: "Rice Mill Manufacturing Machine",
    },
    {
      id: 5,
      img: "https://i.ibb.co/4tcM9Lr/image-2.png",
      subc: ["m1", "m2", "m3"],
      text: "Rice Mill Manufacturing Machine",
    },
    
  ];



  return (
    <div className="grid md:grid-cols-3 gap-4 rounded-lg w-1/2 text-center mx-auto mt-14">
      {allProducts.map((product) => (
        // Render each product as a hero component
        <div
          key={product.id}
          className="hero rounded-lg"
          style={{
            backgroundImage: `url(${product.img})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md mx-auto">
              <h1 className="mb-5  font-bold text-white">
                {product.text}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Load more button */}
        <div key="" className="hero rounded-lg">
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md mx-auto">
              <h1 className="mb-5  font-bold text-white">Load More</h1>
            </div>
          </div>
        </div>
      
    </div>
  );
};

// Export the component
export default Category;