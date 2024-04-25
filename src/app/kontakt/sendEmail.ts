"use server"

import nodemailer from "nodemailer";
import { IFormValues } from "./page";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail({ firstName, lastName, email, message }: IFormValues) {
    try {
        await transporter.sendMail({
            from: "mail@danielhilmer.de",
            to: "mail@danielhilmer.de",
            subject: `Neue Anfrage von ${firstName} ${lastName}`,
            text: `Neue Anfrage von ${firstName} ${lastName}. \n\n Kontakt: ${email} \n\n Nachricht: ${message} `,
            html: `<h1>Neue Anfrage von ${firstName} ${lastName}.</h1><br><p>Kontakt: ${email}</p><br><p>Nachricht: ${message}</p>`,
        });
        console.log("Email sent");
        return { success: true };
    } catch (error: any) {
        console.error("Error sending email", error);
        return { success: false, error: error.message };
    }
}