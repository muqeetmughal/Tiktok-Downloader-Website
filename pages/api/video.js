import axios from "axios";
import fs from "fs";
const cheerio = require("cheerio");

async function getTikTokFullUrl(tiktokMobileURL) {
  try {
    // Make an HTTP GET request to the TikTok URL
    const response = await axios.get(tiktokMobileURL);

    if (response.status === 200) {
      const html = response.data;

      const $ = cheerio.load(html);

      const ogURL = $('meta[property="og:url"]').attr("content");

      return ogURL;
    } else {
      console.log("Failed to fetch the TikTok URL");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function getVideoIDFromURL(url) {
  const regex = /\/video\/(\d+)(?:\/|\?|$)/;
  const videoID = await url.match(regex)[1];
  return videoID;
}
export default async function handler(req, res) {
  if (req.method === "POST") {
    // let videoURL = req.query.url;
    let videoURL = req.body.url;

    // const regexPattern =
    //   /^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+\??[^/]*$/;

    // const isLongVideoURLMatch = regexPattern.test(videoURL);

    // if (!isLongVideoURLMatch) {
    //   videoURL = await getTikTokFullUrl(videoURL);
    //   console.log("Check1",videoURL);
    // }

    // const videoID = await getVideoIDFromURL(videoURL);

    if (videoURL) {
      let api_url = `https://www.tikwm.com/api/`;
      const response = await axios.post(api_url, {
        url: videoURL,
      });
      const json_data = response.data.data
      const result_response = {
        title : json_data?.title,
        cover : json_data?.cover,
        with_watermark_url: json_data?.wmplay,
        without_watermark_url: json_data?.play,
        author_name : json_data?.author?.nickname,
        author_avatar_url : json_data?.author?.avatar,
        music : json_data?.music,
        other_data : {
          ...json_data
        }
      }
      
      // const data = await response.data.aweme_list[0];
      res.status(200).json(result_response);
      // }
      // else {
      //   res.status(401).json("Access Denied");
      // }
    } else {
      res.status(200).json({ success: false, message: "Invalid Tiktok URL" });
    }
  } else {
    res.status(401).json({ success: false, message: "Something went wrong" });
  }
}

// import { setCookie } from 'cookie';

// export default (req, res) => {
//   // Your value to set in the cookie
//   const valueToSet = 'your-value';

//   // Set the cookie
//   setCookie(res, 'cookieName', valueToSet, {
//     // Other options if needed
//     path: '/', // specify the path where the cookie is accessible
//     maxAge: 3600, // specify the max age of the cookie in seconds
//     sameSite: 'strict', // specify the SameSite attribute
//     secure: process.env.NODE_ENV === 'production', // set to true in production to require HTTPS
//   });

//   res.status(200).json({ message: 'Cookie set successfully' });
// };
