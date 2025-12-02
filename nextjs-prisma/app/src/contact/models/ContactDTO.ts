export class ContactEntity {
  constructor(
    public author: string,
    public content: string,
  ) {}
}

export interface IMessage {
  content: string;
}

export interface IAuthor {
  author: string;
}

export interface IContactService {
  post(author: IAuthor, content: IMessage): Promise<ContactEntity>;
  getAll(): Promise<ContactEntity[]>;
  getMessage(author: IAuthor): Promise<ContactEntity>;
}

export interface IContactRepository {
  create(contact: ContactEntity): Promise<ContactEntity>;
}
