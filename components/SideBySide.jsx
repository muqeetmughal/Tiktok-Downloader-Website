import Image from "next/image";
import React from "react";
import image from "../public/images/left.png";
const SideBySide = () => {
  return (
    <>
      <div className="lg:flex gap-4">
        <div className="lg:w-1/2 pt-4">
          <Image src={image} alt="Your Image" className="h-auto p-10 " />
        </div>
        <div className="lg:w-1/2 text-justify p-4">
          <h2 className="text-xl font-bold text-purple-600">DOWNLOAD TIKTOK</h2>
          <p>
            If you want to download TikTok video on Android mobile phone, you
            need to launch the TikTok app and find the video you want to save.
            When you are on the video page, you will see the share button on the
            right side of the screen. Click on it and select Copy Link.
          </p>
          <p>
            Then open our ttdownloader.io page and paste it into the input field
            at the top of the page. Click the Download TikTok video button to
            get the link. TikTok watermark remover will save them without logo.
          </p>
        </div>

      </div>
    </>
  );
};

export default SideBySide;
