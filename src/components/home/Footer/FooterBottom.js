import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | AmmuStore shopping | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by ABC Pvt Ltd.
            </span> <br />
            
          </a>
        </p>
        <p className=" text-center"><span className=" text-lightText ml-1 font-medium group-hover:text-primeColor ml-10">
              This is just an educational skill showing project.
            </span></p>
      </div>
    </div>
  );
};

export default FooterBottom;
