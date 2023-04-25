import React from "react";
import Textslider from "../components/Textslider";
import { Link } from "react-router-dom";
import qualifywebImg from "../Images/qualifyweb.jpg";
import shoeswebImg from "../Images/shoesweb.png";
import dp from "../Images/dp.jpg";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="lg:py-20 md:py-12 sm:py-12 px-12 flex sm:items-center sm:justify-start md:justify-center lg:justify-center">
          <div className="flex sm:items-left md:items-center lg:items-center lg:flex-row md:flex-row sm:flex-col justify-between lg:gap-8 md:gap-4 sm:gap-4">
            <div className="w-28 overflow-hidden rounded-3xl h-28 bg-gray-100">
              <img src={dp} className="w-full h-full object-cover brightness-100" alt="" />
            </div>
            <div>
              <p className="font-lighter text-3xl">Hy, I'm Rishi</p>
              <div className="flex items-center">
                <p className="font-lighter mr-1 text-3xl">I Design</p>
                <Textslider />
              </div>
            </div>
            <Link to="/">
              <span className="font-semibold lg:hidden sm:block w-min md:hidden hover:text-white hover:bg-black duration-500 lg:text-md md:text-md sm:text-md px-3 py-2 rounded-xl bg-[#F6ECFF]">
                About
              </span>
            </Link>
          </div>
        </div>
        <div>
        <p className="font-light text-center text-3xl">Projects</p>
        <div className="flex justify-center items-center p-12">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Link to="https://vp8hd8-5173.csb.app/">
            <div className="w-full duration-150 hover:shadow-xl overflow-hidden rounded-2xl border ">
              <img src={qualifywebImg} className="w-full h-full" alt="" />
            </div></Link>
            <Link to="https://chimerical-pasca-a126cb.netlify.app/">
            <div className="w-full duration-150 hover:shadow-xl overflow-hidden rounded-2xl border ">
              <img src={shoeswebImg} className="w-full h-full" alt="" />
            </div></Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
