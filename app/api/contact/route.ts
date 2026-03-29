import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Portfolio Contact <ravipatimadhulika205@gmail.com>",
    replyTo: email, // 👈 IMPORTANT
    to: "ravipatimadhulika205@gmail.com",
    subject: `Portfolio Contact from ${name}`,
    text: message,
  });

  return NextResponse.json({ success: true });
}