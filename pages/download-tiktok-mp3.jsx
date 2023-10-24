import React, { useState } from "react";
import Accordian from "../components/Accordian";
import StepsToFollow from "../components/StepsToFollow";

const TiktokMp3Downloaad = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const accordionData = [
    {
      title: "Is there a charge for downloading TikTok videos?",
      content: "No, you can download TikTok videos for free. Our TikTok video download service is always free to use and supports all modern browsers like Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and more."
    },
    {
      title: "Do I have to install any extensions to use the TikTok video downloader?",
      content: "No, there's no need to install any extensions to save TikTok videos and remove the TikTok watermark online. Simply provide the video link in the input field and select the desired format for conversion. Our TikTok watermark remover tool will handle the rest."
    },
    {
      title: "Where can I find my downloaded TikTok videos?",
      content: "After downloading TikTok videos without the watermark, they are typically saved to your default location. You can customize the destination folder for your files in your browser settings."
    },
    {
      title: "Is a ttdownloader.io account required to download TikTok videos?",
      content: "No, you do not need a ttdownloader.io account to download TikTok videos. Simply paste the video link into the input field at the top of the page and click 'Download.' Our TikTok download service will remove the watermark, and your video will be ready in a matter of seconds."
    }
  ];

  const ways = [
    {
      ways: "- open the ttdownloader.io app and select the video you wish to save to your mobile device."
    },
    {
      ways: `- click on the "Share" icon (the arrow button at the top of your chosen video), and then select "Copy link."`
    },
    {
      ways: `- return to the ttdownloader.io service and paste the copied link into the text field on the page. Afterward, click the "Save" button.`
    }
  ];

  return (
    <>
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto my-10">

        <div className="card my-1 shadow-xl">
          <div className="card-body text-justify">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">The most efficient method to save videos is by copying a link and pasting it on our websites main page, www.ttdownloader.io</h2>
            <p>TikTok, formerly known as Musically (and Douyin in China), is a popular social network for creating and sharing short viral videos. This social media application boasts one of the highest installation numbers worldwide. The official app allows you to save your own videos and those of your friends, but unfortunately, it adds a watermark to each saved video.</p>
            <p>For the quickest way to download videos from TikTok in mp3 or mp4 formats, visit www.ssstik.io TikTok downloader. Download a single video to witness how the process works.</p>

            <div className="p-2">
              <h1 className="text-2xl font-bold text-purple-600 pb-4">STEPS TO BE FOLLOWED</h1>

              <ul className="p-4 card my-1 shadow-xl bg-gradient-to-t from-purple-600 to-pink-500">
                {ways.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-justify text-white py-2 font-semibold ">{item.ways}</li>

                  )
                })}
              </ul>
            </div>



            <div className="max-w-full mx-auto p-2 py-8">
              <h1 className="text-2xl font-bold text-gray-600 pb-4">FAQs</h1>
              {accordionData.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 text-left bg-gray-200 hover:bg-gray-300 text-md font-semibold flex justify-between"
                  >
                    {item.title}
                    <span className={openIndex === index ? 'transform rotate-180' : ''}>&#9660;</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 border-l border-r border-b">{item.content}</div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TiktokMp3Downloaad;
