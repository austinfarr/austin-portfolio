import nodemailer from "nodemailer";

const email = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;

console.log(email, password);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email, // Sender address
  to: email,
};
