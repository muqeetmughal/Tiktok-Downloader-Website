// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import axios from "axios";
import fs from "fs";

export default async function handler(req, res) {
  try {
    const videoURL = req.query.url; // Get the URL from the query parameters
    const response = await axios.get(videoURL, { responseType: "stream" });
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=ttdownloader.io_.mp4`
    );
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).end("Error downloading the video.");
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};
