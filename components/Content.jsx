import React, { useState } from "react";
import { CONTEXT } from "../constants/variables";
import Image from "next/image";
import Accordian from "./Accordian";
import StepsToFollow from "./StepsToFollow";
import HomeCards from "./HomeCards";
const Content = () => {




  return (
    <>
      <HomeCards />
      <StepsToFollow />
      <Accordian />






































      <div className="container">
        <div className="lg:flex w-full">
          <div className="w-1/2">
            <div className="left-image">

            </div>
          </div>
          <div className="w-1/2">

          </div>
        </div>
      </div>





    </>
  );
};

export default Content;
