"use server"

import nodemailer, { TransportOptions } from "nodemailer";

type IProps = {
    firstName: string,
    lastName: string,
    business: string,
    email: string,
    thema: string,
    message: string,
    privacy: boolean,
}

interface AddTransportOptions extends TransportOptions {
    host: string;
}

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
} as AddTransportOptions);

export async function sendEmail({ firstName, lastName, business, email, thema, message }: IProps) {
    transporter.verify((error) => {
        if (error) {
            console.error("Error connecting to SMTP server", error);
            return { success: false, error: error.message };
        }
    })

    try {
        await transporter.sendMail({
            from: "mail@danielhilmer.de",
            to: "mail@danielhilmer.de",
            subject: `Neue Anfrage von ${firstName} ${lastName}`,
            text: `Neue Anfrage von ${firstName} ${lastName}. \n\n Kontakt: ${email} \n\n Business: ${business} \n\n Thema: ${thema} \n\n Nachricht: ${message}.`,
            html: `<h1>Neue Anfrage von ${firstName} ${lastName}.</h1><br><p>Kontakt: ${email}</p><br><p>Business: ${business}</p><br><p>Thema: ${thema}</p><br><p>Nachricht: ${message}</p>`,
        });
        return { success: true };
    } catch (error: any) {
        console.error("Error sending email", error);
        return { success: false, error: error.message };
    }
}