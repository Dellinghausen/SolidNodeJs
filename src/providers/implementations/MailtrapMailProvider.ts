import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer'
import { IMailProvider, IMessage } from "../IMailProviders";

export class MailtrapMailProvider implements IMailProvider {
    private trasnporter: Mail

    constructor() {
        this.trasnporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "341174dfee09f1",
                pass: "e88afe071c223b"
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.trasnporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}