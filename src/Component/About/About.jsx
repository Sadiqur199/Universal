import React from "react";
// import './About.css'
const About = () => {
  return (
    <div className="px-24 mt-24 bg-[#F0F0F0] py-20">
      <h1 className="font-bold text-3xl mb-5">About Us</h1>
      <div className="flex text-justify mr-[200px]">
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
        <div className="ml-72 flex justify-center items-center">
          <div className="w-[250px] h-[250px] bg-gradient-to-b to-transparent bg-radial absolute rounded-full border-[1.8] border-gray-500">
            <div className="absolute top-[-9%] left-[41%]">
              <img className="h-20 w-20" src="https://i.ibb.co/6Rcx91n/i1.png" alt="sadiq" />
            </div>
            <div className="absolute top-[41.5%] right-[-5%]">
              <img className="h-20 w-20" src="https://i.ibb.co/5Lx0LR1/i2.png" alt="sadiq" />
            </div>
            <div className="absolute bottom-[25%] left-[-10%]">
              <img className="h-20 w-20" src="https://i.ibb.co/1zr7fJR/image-2.png" alt="sadiq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
