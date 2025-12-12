import { MailEntity } from "../entities/MailEntity";

export interface IMailValidator {
  validate(email: string, message: string): Promise<MailEntity | boolean>;
}

export interface IMailSender {
  send(email: string, message: string): Promise<void>;
}
