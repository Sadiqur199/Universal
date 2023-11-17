import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div
          id="item1"
          className="carousel-item w-full h-[400px] "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/yyj0pD1/Screenshot-2023-11-12-074504-1.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" w-full relative "
            style={{
              backgroundImage: 'url("https://i.ibb.co/zHNKvyD/image.png")',
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:px-24 px-3 mt-32">
              <h1 className="font-bold text-2xl">
                Rice Mill Manufacturing <br /> Machine
              </h1>
              <p className="text-gray-500 mb-7">
                Contact with our category reprensative
              </p>
              <button className="btn btn-sm bg-[#0C356A] text-white hover:bg-[#0C356A]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div
          id="item2"
          className="carousel-item w-full h-[400px] "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/yyj0pD1/Screenshot-2023-11-12-074504-1.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" w-full relative "
            style={{
              backgroundImage: 'url("https://i.ibb.co/zHNKvyD/image.png")',
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:px-24 px-3 mt-32">
              <h1 className="font-bold text-2xl">
                Rice Mill Manufacturing <br /> Machine
              </h1>
              <p className="text-gray-500 mb-7">
                Contact with our category reprensative
              </p>
              <button className="btn btn-sm bg-[#0C356A] text-white hover:bg-[#0C356A]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div
          id="item3"
          className="carousel-item w-full h-[400px] "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/yyj0pD1/Screenshot-2023-11-12-074504-1.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" w-full relative "
            style={{
              backgroundImage: 'url("https://i.ibb.co/zHNKvyD/image.png")',
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:px-24 px-3 mt-32">
              <h1 className="font-bold text-2xl">
                Rice Mill Manufacturing <br /> Machine
              </h1>
              <p className="text-gray-500 mb-7">
                Contact with our category reprensative
              </p>
              <button className="btn btn-sm bg-[#0C356A] text-white hover:bg-[#0C356A]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div
          id="item4"
          className="carousel-item w-full h-[400px] "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/yyj0pD1/Screenshot-2023-11-12-074504-1.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className=" w-full relative "
            style={{
              backgroundImage: 'url("https://i.ibb.co/zHNKvyD/image.png")',
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:px-24 px-3 mt-32">
              <h1 className="font-bold text-2xl">
                Rice Mill Manufacturing <br /> Machine
              </h1>
              <p className="text-gray-500 mb-7">
                Contact with our category reprensative
              </p>
              <button className="btn btn-sm bg-[#0C356A] text-white hover:bg-[#0C356A]">
                Contact Us
              </button>
            </div>
          </div>
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
