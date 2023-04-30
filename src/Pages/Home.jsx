import React, { useEffect, useState } from "react";
import Textslider from "../components/Textslider";
import { Link } from "react-router-dom";
import qualifywebImg from "../Images/qualifyweb.jpg";
import shoeswebImg from "../Images/shoesweb.png";
import netflix from "../Images/netflix.png";
import dp from "../Images/dp.jpg";
import 'boxicons/css/boxicons.min.css'
import resume from '../resume.pdf'

const Home = () => {
  const [shimmer, setShimmer] = useState(false);
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setShimmer(true);
  }, 5000);

  return () => {
    clearTimeout(timeoutId);
  };
}, []);

  return (
    <>
    {!shimmer ? 
    <>
    <div className="w-full h-full p-12">
      <div className="w-full h-full py-12 flex items-center justify-center">
        <div className="flex lg:flex-row md:flex-row sm:flex-col  items-center gap-8">
          <div className="w-28 h-28 bg-gray-100 animate-pulse rounded-3xl"></div>
          <div className="gap-4">
            <div className="w-60 h-8 mb-4 bg-gray-100 animate-pulse"></div>
            <div className="w-60 h-8 bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-12 flex items-center flex-col justify-center">
        <div className="w-40 h-8 mb-12 bg-gray-100 animate-pulse"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="w-[300px] h-[300px] rounded-3xl bg-gray-100 animate-pulse"></div>
          <div className="w-[300px] h-[300px] rounded-3xl bg-gray-100 animate-pulse"></div>
          <div className="w-[300px] lg:block md:hidden sm:hidden h-[300px] rounded-3xl bg-gray-100 animate-pulse"></div>
        </div>
      </div>
    </div>
    </> 
    :
    <>
    <div className={`w-full h-full duration-500 ${shimmer ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="lg:py-20 md:py-12 sm:py-12 px-12 flex sm:items-center sm:justify-start md:justify-center lg:justify-center">
          <div className="flex sm:items-left md:items-center lg:items-center lg:flex-row md:flex-row sm:flex-col justify-between lg:gap-8 md:gap-4 sm:gap-4">
            <div className="w-28 overflow-hidden rounded-3xl h-28 bg-gray-100">
              <img src={dp} className="w-full h-full object-cover brightness-100" alt="" />
            </div>
            <div>
              <p className="font-lighter text-3xl">Hy, I'm Rishi</p>
              <div className="flex sm:flex-col md:flex-row lg:flex-row">
                <p className="font-lighter mr-1 text-3xl">I Design</p>
                <Textslider />
              </div>
            </div>
            <a href={resume} download='resume' >
  <span className="font-semibold mt-2 text-center flex items-center justify-center lg:hidden sm:block w-40 select-none md:hidden hover:text-white hover:bg-black duration-500 lg:text-md md:text-md sm:text-md px-3 py-2 rounded-xl bg-[#F6ECFF]">
    <i className="bx bx-receipt"></i> Download CV
  </span>
</a>

          </div>
        </div>
        <div>
        <p className="font-light text-center text-3xl">Projects</p>
        <div className="flex justify-center items-center p-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Link to="https://vp8hd8-5173.csb.app/">
            <div className="w-full duration-150 hover:shadow-xl overflow-hidden rounded-2xl border ">
              <img src={qualifywebImg} className="w-full h-full" alt="" />
            </div>
              <p className="font-light text-xsm">Quatify - API Calls</p>
            </Link>
            <Link to="https://chimerical-pasca-a126cb.netlify.app/">
            <div className="w-full duration-150 hover:shadow-xl overflow-hidden rounded-2xl border ">
              <img src={shoeswebImg} className="w-full h-full" alt="" />
            </div>
            <p className="font-light text-xsm">Kicsknation - API Calls,Redux Complex State Management & Firebase Authentication</p>
            </Link>
            <Link to="https://peppy-hummingbird-40ede8.netlify.app/">
            <div className="w-full duration-150 hover:shadow-xl overflow-hidden rounded-2xl border ">
              <img src={netflix} className="w-full h-full object-cover" alt="" />
            </div>
            <p className="font-light text-xsm">Netflix Clone - Multiple API Calls,Redux Complex Tree State Management & Firebase Authentication</p>
            </Link>
          </div>
        </div>
        </div>
      </div>
      </>    
    }
      
    </>
  );
};

export default Home;
