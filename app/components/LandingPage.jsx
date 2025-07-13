import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] pt-1">
      <div className="textStructure mt-30 px-12">
        {["We create", "eye opening", "presentations"].map((elem, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-baseline">
            {index === 1 && <div className="w-[9vw] h-[5.7vw] bg-amber-500  mr-[1vw] rounded-md overflow-hidden">
              <Image src="/banner-img.jpg" width="100" height="100" alt="Ochi" className="w-100 h-[100%]"/>
            </div>}
            <h1
              key={index}
              className="uppercase font-[foundersGrotesk] font-normal text-[#212121] text-[9vw] leading-[6.8vw]"
            >
              {elem}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-[#2121214D] w-full mt-25 flex justify-between items-center py-3 px-12  font-[NeueMontreal] text-[#212121] font-normal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((elem, index) => (
          <p key={index}>
            {elem}
          </p>
        ))}
        <div className="start flex items-center gap-1">
        <div className="uppercase border-1 rounded-full px-2 py-1 text-sm">Start the project</div>
        <div className="rounded-full border-1 w-8 h-8 flex justify-center items-center"><MdArrowOutward /></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
