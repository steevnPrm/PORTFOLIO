import { MailEntity } from "../entities/MailEntity";
import { IMailSender, IMailValidator } from "../ports/IMailServices";

export class MailValidator implements IMailValidator {
  async validate(email: string, message: string): Promise<MailEntity> {
    if (!email || !message) {
      throw new Error("Contenu  requis");
    }
    return new MailEntity(email, message);
  }
}

export class MailSender implements IMailSender {
  constructor(private infra: IMailSender) {}
  async send(email: string, message: string): Promise<void> {
    await this.infra.send(email, message);
  }
}
