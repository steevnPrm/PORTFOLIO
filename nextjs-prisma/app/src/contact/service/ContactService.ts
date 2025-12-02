import {
  ContactEntity,
  IAuthor,
  IContactRepository,
  IContactService,
  IMessage,
} from "../models/ContactDTO";

export class ContactService implements IContactService {
  constructor(private readonly repo: IContactRepository) {}
  post(author: IAuthor, content: IMessage): Promise<ContactEntity> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ContactEntity[]> {
    throw new Error("Method not implemented.");
  }
  getMessage(author: IAuthor): Promise<ContactEntity> {
    throw new Error("Method not implemented.");
  }
}
