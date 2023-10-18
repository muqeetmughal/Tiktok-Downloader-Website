const nodemailer = require("nodemailer");

const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.mailtrap.io",
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "user",
    pass: process.env.SMTP_PASSWORD || "password",
  },
};
export const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail(data);

// return smtpOptions
};

// Example usage:
// const emailData = {
//   to: "recipient@example.com",
//   subject: "Test Email",
//   html: "<p>This is a test email</p>",
// };

// sendEmail(emailData)
//   .then((info) => {
//     console.log("Email sent: " + info.response);
//   })
//   .catch((error) => {
//     console.error("Error sending email: " + error);
//   });
