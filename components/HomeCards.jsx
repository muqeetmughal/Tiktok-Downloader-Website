import React from "react";
import Image from "next/image";
import image from "../public/images/unlimited.svg";
import watermark from "../public/images/nowatermark.svg";
import audio from "../public/images/audio.svg";
const HomeCards = () => {
  const cardData = [
    {
      image: image,
      heading: "Unlimited",
      text: "Save as many videos as you need, no limits or any other restrictions.",
    },
    {
      image: watermark,
      heading: "No Watermark!",
      text: "Download a Tiktok video without watermark",
    },
    {
      image: audio,
      heading: "MP4 and MP3",
      text: "convert the video into Mp3 , Save the video in Mp4 & HD",
    },
  ];

  return (
    <>
      <div className="lg:flex justify-center p-4">
        <div className="lg:flex lg:space-x-4 my-10 ">
          {cardData.map((item, index) => {
            return (
              <div
                className=" shadow-md p-4 rounded-lg my-2 text-center"
                key={index}
              >
                <div style={{ width: "200px", height: "100px",margin:"auto" }}>
                  <Image
                    style={{ margin: "auto" }}
                    src={item.image}
                    width={100}
                    height={200}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-600">
                  {item.heading}
                </h2>
                <p className="text-justify ">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeCards;
