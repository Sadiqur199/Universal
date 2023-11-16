import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full h-[500px] "
        style={{
          backgroundImage: 'url("https://i.ibb.co/yyj0pD1/Screenshot-2023-11-12-074504-1.png")',
          backgroundSize:'cover',
          backgroundRepeat:"no-repeat"
          
        }}
        >
          
            <div className=" w-1/2" style={{
        backgroundImage: 'url("https://i.ibb.co/zHNKvyD/image.png")',
        backgroundSize:'cover',

      }}>
              <h1>Rice Mill Manufacturing Machine</h1>
            </div>
          
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
