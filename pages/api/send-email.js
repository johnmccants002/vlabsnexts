import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Set the Access-Control-Allow-Origin header to allow requests from localhost:3000
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Get the email details from the request body
  const { to, from, subject, message, html } = req.body;

  // Send the email using the SendGrid API
  try {
    await sgMail.send({ to, from, subject, text: message, html });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
