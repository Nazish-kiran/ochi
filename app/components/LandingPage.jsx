import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] pt-1">
      <div className="textStructure mt-30 px-12">
        {["We create", "eye opening", "presentations"].map((elem, index) => (
          <div className="masker ">
            <h1
              key={index}
              className="uppercase font-[foundersGrotesk] font-normal text-[#212121] text-9xl leading-[100px]"
            >
              {elem}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
