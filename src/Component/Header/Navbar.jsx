import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-[#FCB913]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-[#0C356A] hover:border-b hover:border-[#0C356A] transition-all">
                <Link href="/" legacyBehavior>
                  <a className="hover:bg-[#FCB913]">
                    <IoHome /> Home
                  </a>
                </Link>
              </li>

              <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
                <a href="" className="hover:bg-[#FCB913]">About</a>
              </li>

              <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
                <a href="" className="hover:bg-[#FCB913]">Category</a>
              </li>

              <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
                <a href="" className="hover:bg-[#FCB913]">Contact</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="md:px-24">
            <img
              className="h-[65px]"
              src="https://i.ibb.co/ggBWcxT/Whats-App-Image-2023-11-09-at-8-30-1.png"
              alt=""
            />
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className="text-[#0C356A]  hover:border-b hover:border-[#0C356A] transition-all">
              <Link href="/" legacyBehavior>
                <a className="hover:bg-[#FCB913]">
                  <IoHome /> Home
                </a>
              </Link>
            </li>

            <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
              <a href="" className="hover:bg-[#FCB913]">About</a>
            </li>

            <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
              <a href="" className="hover:bg-[#FCB913]">Category</a>
            </li>

            <li className="text-[#0174BE] font-semibold hover:border-b hover:border-[#0174BE] transition-all">
              <a href="" className="hover:bg-[#FCB913]">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
