import axios from "axios";
import fs from "fs";

export default async function handler(req, res) {
  const response = await axios.post(
    "https://ssstik.io/abc",
    new URLSearchParams({
      id: "https://www.tiktok.com/@ubed_sk007/video/7291255848276413698?is_from_webapp=1&sender_device=pc",
      locale: "en",
      tt: "NHBveDE5",
    }),
    {
      params: {
        url: "dl",
      },
    }
  );
  console.log(response.data);

  res.status(200).json({ name: "John Doe" });
}
