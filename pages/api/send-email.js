import { NextApiRequest, NextApiResponse } from "next";
// import { render } from "@react-email/render";
import { sendEmail } from "./email";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const from_email = req.body.email;
    const message = req.body.message;

    try {

      let html_message = `from : ${from_email}`
      await sendEmail({
        to: "muqeetmughal786@gmail.com",
        subject: `Tiktok Downloader Message From ${name}`,
        html: message,
        from: process.env.SMTP_USER || "tiktokdownloader@muqeet.dev"
      });
      return res.status(200).json({ success: true, message: "Email Sent" });

    } catch (err) {
      console.log(err)
      return res.status(400).json({ success: false, message: "Sorry try again" });

    }

  } else {
    return res.status(405).json({ success: false, message: "Method not alloed" });

  }




}
