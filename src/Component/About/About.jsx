import React from "react";
// import './About.css'
const About = () => {
  return (
    <div className="md:px-24 px-3  mt-24 bg-[#F0F0F0] py-20 md:pb-[80px] pb-[270px]">
      <h1 className="font-bold text-3xl mb-5">About Us</h1>
      <div className="md:flex md:text-justify md:mr-[200px]">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            praesentium inventore fugit assumenda quam, ea beatae tempore neque,
            repellat officia modi fuga ipsam voluptate odio. Beatae impedit
            rerum sequi facere unde, quia debitis ut odio ullam sunt nihil
            explicabo aspernatur assumenda harum mollitia dolor! Vel totam
            sapiente itaque cumque? Optio veritatis blanditiis eum facilis
            doloremque, voluptatem, eligendi, explicabo minima dicta enim
            praesentium rem quae! Ratione, voluptatem temporibus nihil ex
            deleniti quidem veniam, quis laboriosam quas similique eligendi cum
            possimus dolor? <br /> <br /> Molestiae animi culpa repellat dicta a
            debitis, quo numquam tempore doloribus, hic quia consectetur illo
            dolorum facilis sint adipisci error aspernatur commodi quis sit
            tempora. Doloremque voluptate dolorum quo veniam nesciunt ipsum
            quibusdam soluta aperiam eligendi sunt cum perspiciatis non natus,
            dolorem repudiandae adipisci odit eaque reprehenderit architecto
            laborum! At commodi beatae eos fuga, quisquam laudantium repudiandae
            cumque repellat est architecto quam corrupti molestias, perferendis
            incidunt cum quibusdam velit eum....
            <span className="text-blue-500 underline">Read More</span>
          </p>
        </div>
        <div className=" md:ml-72 flex justify-center items-center">
          <div className="md:w-[250px] w-[200px] h-[200px] md:h-[250px] md:mt-0 mt-[270px] bg-gradient-to-b to-transparent bg-radial absolute rounded-full border-[1px] border-gray-500">
            <div className="absolute top-[-9%] left-[41%]">
              <img className="md:h-20 md:w-20 w-14 h-14" src="https://i.ibb.co/6Rcx91n/i1.png" alt="sadiq" />
            </div>
            <div className="absolute top-[41.5%] right-[-5%]">
              <img className="md:h-20 md:w-20 w-14 h-14" src="https://i.ibb.co/5Lx0LR1/i2.png" alt="sadiq" />
            </div>
            <div className="absolute bottom-[25%] left-[-10%]">
              <img className="md:h-20 md:w-20 w-14 h-14" src="https://i.ibb.co/1zr7fJR/image-2.png" alt="sadiq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
