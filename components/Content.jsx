import React from "react";
import { CONTEXT } from "../constants/variables";
import Image from "next/image";
import image from "../public/images/unlimited.svg"
import watermark from "../public/images/nowatermark.svg"
import audio from "../public/images/audio.svg"
const Content = () => {

  const cardData = [
    {
      image: image,
      heading: "Unlimited",
      text: "Save as many videos as you need, no limits or any other restrictions."
    },
    {
      image: watermark,
      heading: "No Watermark!",
      text: "TikTok download without watermark, remove a TT logo."
    },
    {
      image: audio,
      heading: "MP4 and MP3",
      text: "Save videos in hd quality, MP4 file format or convert to audio MP3."
    },
  ]
  const ways = [
    {
      ways: "- play a video that you want to save to your mobile device, using the TT app"
    },
    {
      ways: `- tap "Share" (the arrow button on top of a chosen video), and then tap "Copy link`

    },
    {
      ways: `- go back to sss TikTok download video service and paste the link in the text field on the page and tap on the "Save" button`
    },

  ]
  return (
    <>

      <div className="lg:flex justify-center p-2">
        <div className="lg:flex lg:space-x-4 my-10 ">
          {cardData.map((item, index) => {
            return (


              <div className="bg-white shadow-md p-4 rounded-lg my-2 text-center" key={index}>
                <div style={{ width: "200px", height: "100px" }}>
                  <Image
                    style={{ margin: "auto" }}
                    src={item.image}
                    width={100}
                    height={200}
                    alt=""
                  />

                </div>
                <h2 className="text-xl font-semibold text-gray-600">{item.heading}</h2>
                <p classNameName="text-justify ">{item.text}</p>

              </div>

            )

          })}
          


        </div>
      </div>

      <div className="p-2">
        <h1 className="text-2xl font-bold text-gray-600">STEPS TO BE FOLLOWED</h1>

        <ul className="p-4 card my-1 shadow-xl bg-gradient-to-t from-purple-600 to-pink-500">
          {ways.map((item, index) => {
            return (
              <li key={index} className="text-lg text-justify text-white py-2 font-semibold ">{item.ways}</li>

            )
          })}
        </ul>
      </div>

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


      {/* <div className="card my-1 shadow-xl">
        <div className="card-body">
          <h1 className="card-title">What is Tiktok Downloader?</h1>

          <p>
            Free Password Generator is an online tool to generate random
            passwords of your choice in numbers, uppercase, lowercase, and
            symbol combinations.
          </p>

          <h2 className="card-title">What makes a password strong?</h2>

          <h3>
            <b>Strong passwords are unique and random.</b>
          </h3>

          <p>
            People aren&apos;t very good at coming up with passwords that are
            either of these things, let alone both. That&apos;s why we created{" "}
            <b>&quot;Free Password Generator&quot;</b> Strong Password Generator
            to create safe, memorable passwords for you. 81% of data breaches
            are caused by reused or weak passwords, so random, unique passwords
            are your best defense against online threats.
          </p>
          <h2 className="card-title">Why should my password be unique?</h2>

          <p>
            If you use the same password for both your email account and your
            bank account login, an attacker only needs to steal one password to
            gain access to both accounts, doubling your risk. If you&apos;ve
            used the same password for 14 different accounts, you&apos;re making
            it very, very easy for an attacker. You can protect yourself by
            using a generator to create unique passwords that are easy to
            remember.
          </p>
          <h2 className="card-title">Why should my password be random?</h2>

          <p>
            Random passwords are hard to guess and harder for computer programs
            to crack. If there is a recognizable pattern, the likelihood of an
            attacker using a brute force attack to gain access to your account
            increases exponentially. Random passwords can contain a jumble of
            unrelated characters, but combining unrelated words also works. This
            is how Free Password Generator Strong Password Generator creates
            passwords that are easy to remember, yet cryptographically strong.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Content;
