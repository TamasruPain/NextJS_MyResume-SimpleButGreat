import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {emailTemplate} from "@/lib/emailTemplates"
export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const date = new Date().toLocaleString();

        // Email to ower
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: subject || "📩 New Contact Form Message",
            html: emailTemplate({
                title: "📩 New Contact Form Submission",
                content: `
          <p><strong>Date:</strong> ${date}</p>
          <hr/>
          <h3>👤 Sender Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>📝 Message</h3>
          <p>${message}</p>
        `,
            }),
        });

        // Confirmation to visitor
        await transporter.sendMail({
            from: `"" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `✅ Thanks for contacting `,
            html: emailTemplate({
                title: "✅ Thank you for reaching out!",
                content: `
          <p>Hello <strong>${name}</strong>,</p>
          <p>Your message is recived and I will respond shortly.</p>
          <hr/>
          <h3>📩 Your Message</h3>
          <p><strong>Subject:</strong> ${subject || "No subject"}</p>
          <p>${message}</p>
          <hr/>
          <p style="margin-top: 20px;">Best regards,<br/>Tamasru Pain</p>
        `,
            }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form email error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
