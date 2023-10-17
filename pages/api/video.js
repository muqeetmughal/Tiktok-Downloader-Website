// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
import axios from "axios";
import fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const videoURL = req.body.url;
    const regex = /\/video\/(\d+)/;
    const match = videoURL.match(regex);

    if (match) {
      const videoId = match[1];
      let api_url = `https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${videoId}`;
      const response = await axios.get(api_url);
      const data = await response.data.aweme_list[0];
      res.status(200).json(data);
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