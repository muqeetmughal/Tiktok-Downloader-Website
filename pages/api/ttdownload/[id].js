// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import axios from "axios";
import fs from "fs";

export default async function handler(req, res) {
  try {
    // const videoURL = req.query.url; // Get the URL from the query parameters
    // let videoURL =
    // ("https://www.tiktok.com/@ubed_sk007/video/7274366546275732741");
    // const videoURL = 'https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=7274366546275732741'
    // const videoURL =
    //   "https://v16m-default.akamaized.net/faa50fa66e55df5e2aed663f65ffcef3/652e8a41/video/tos/useast2a/tos-useast2a-ve-0068c004/ok57kOAiBcrmApdUeePEOfeSOEq3QSfYABiwfZ/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1044&bt=522&bti=Ozk3QGo4dik7OzlmMzAuYCM6bS4xMDo%3D&cs=0&ds=6&ft=iJOG.yFUZkr0PD1OfB~xg9wCSQpaBEeC~&mime_type=video_mp4&qs=4&rc=Zjw6OGk2aDY3ZWk0NWU3O0BpM2RzNTM6Zjx1bTMzNzczM0A0MzZiLmFeX2MxYDM0YV4xYSNrZm9xcjRvbm1gLS1kMTZzcw%3D%3D&l=2023101707203304F28A217567B08EA537&btag=e00088000";

    const response = await axios.get(videoURL, { responseType: "stream" });

    // Set the appropriate content headers
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Content-Disposition", "attachment; filename=video.mp4");

    // Stream the video to the client
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).end("Error downloading the video.");
  }
}
