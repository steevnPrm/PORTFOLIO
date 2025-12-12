import { IMailSender } from "../domain/ports/IMailServices";

import nodemailer, { Transporter } from "nodemailer";

export class MailingInfrastructure implements IMailSender {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_PROVIDER,
      auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });
  }
  async send(email: string, message: string): Promise<void> {
    await this.transporter.sendMail({
      to: process.env.OWNER_EMAIL,
      subject: "nouveau formulaire soumis :" + email,
      text: message,
    });
  }
}
