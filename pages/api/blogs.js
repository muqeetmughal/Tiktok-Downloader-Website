import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const response = await axios.get(
      "https://nilkinpakistan.com/wp-json/wp/v2/posts"
    );
    const data = await response.data;
    res.status(200).json(data);
  } else {
    res.status(401).json({ success: false, message: "Something went wrong" });
  }
}
