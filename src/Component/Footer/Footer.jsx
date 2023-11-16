import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";



const Footer = () => {
  return (
    <div>
    <div className="bg-[#D9D9D9]">
      <div className="flex ">
        <div
          className="py-20 px-32 w-[800px]"
          style={{
            backgroundImage: 'url("https://i.ibb.co/t49zNZR/Rectangle-9.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="font-bold text-3xl mb-5">Address</h1>
          <p className="flex mb-3 font-bold">
            <MdOutlinePhone size={20} className="mt-1 mr-2" />+8801727623604
          </p>
          <p className="flex mb-3 font-bold">
          <IoMailOutline size={20} className="mt-1 mr-2"/> universalinternational.ui@gmail.com
          </p>
          <p className="flex mb-3 font-bold"><IoLocationOutline size={20} className="mt-1 mr-2"/>Mirpur, Dhaka Bangladesh</p>

          <div className="flex gap-4">
            <p><IoMailOutline size={30} className="mt-1 mr-2"/></p>
            <p><MdOutlinePhone size={30} className="mt-1 mr-2"/></p>
            <p><IoMailOutline size={30} className="mt-1 mr-2"/></p>
            <p><IoMailOutline size={30} className="mt-1 mr-2"/></p>
            <p><IoMailOutline size={30} className="mt-1 mr-2"/></p>
            <p><IoMailOutline size={30} className="mt-1 mr-2"/></p>
          </div>
        </div>

        <div className="py-20 px-20 ">
          <h1 className="font-bold text-3xl mb-5">
            Send Message
          </h1>
          <div>
            <p className="mb-3"><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full" /></p>
            <p className="mb-3"><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full" /></p>
            <p className="mb-3"><textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs rounded" ></textarea></p>
            <button className="btn btn-sm bg-[#0C356A] text-white hover:bg-[#0C356A]">Contact Me</button>

          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#2F2F2F] px-24 py-10">
       <div className="flex justify-between">
        <div>
        <h1 className="font-bold text-xl text-white">© All Right Reverved -2023</h1>
        </div>
        <div>
          <h2 className="font-bold text-xl text-white">Universal International-2023</h2>
        </div>
       </div>
    </div>
    </div>
  );
};

export default Footer;
