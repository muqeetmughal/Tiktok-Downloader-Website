import Image from "next/image";
import React from "react";
import image from "../public/images/left.png";
import iphone from "../public/images/iphone.svg";
import download from "../public/images/download.svg";
import Accordian from "../components/Accordian";
import TiktokVideoDownloader from "../components/TiktokVideoDownloader";
const HowToDownloadTiktokVideoPage = () => {
  return (
    <>
     <TiktokVideoDownloader heading={"Save Tik Tok video without watermark"} paragraph=" Save TikTok video without watermark is the tool helping you download TikTok video without watermark"/>
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto my-5">
       
        <div className="card my-1 shadow-xl">
          <div className="card-body text-justify">
            <h2 className="text-xl font-bold mb-4 text-gray-600">The fastest and easiest way to save videos is to copy a link and paste it on the main page of our website www.ttdownloader.io</h2>
            <p>TikTok, ex musically (also known as Douyin in China) is a social network for viewing and creating short viral videos. The application for this social network takes leading positions for the number of installations worldwide. The official app allows you to save your videos, as well as your friends’ videos, but the bad news is that each saved video will have a watermark</p>
            <p>www.ttdownloader.io TikTok downloader offers you the fastest way to download videos from TikTok in mp3 or mp4. Download one video and see how it works.</p>
      
              <div className=" text-justify ">
                <h1 className="text-xl font-bold text-purple-600">How to save TikTok without watermark on Android phone?</h1>
                <p>
                Copy a link with a video, then open your mobile browser and paste the link on the main page of our website. Press the Download button. Thats it!
                </p>
                <p>
                  Then open our ttdownloader.io page and paste it into the input field
                  at the top of the page. 
                </p>
              </div>


            
              <div className="text-justify p-2">
                <h1 className="text-xl font-bold text-purple-600">How to save TikTok without watermark on Android phone?</h1>
                <p>
                Copy a link with a video, then open your mobile browser and paste the link on the main page of our website. Press the Download button. Thats it!
                </p>
                <p>
                  Then open our ttdownloader.io page and paste it into the input field
                  at the top of the page. 
                </p>
              </div>

          
            <Accordian/>
          </div>
        </div>
      </div>
    </>
  )
};

export default HowToDownloadTiktokVideoPage;
