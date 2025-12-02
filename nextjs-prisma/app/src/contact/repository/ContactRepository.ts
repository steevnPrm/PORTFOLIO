import prisma from "@/app/lib/prisma";
import { ContactEntity, IContactRepository } from "../models/ContactDTO";

export class ContactRepository implements IContactRepository {
  constructor(
    private readonly prismaClient : typeof prisma
  ){}
  async create(contact: ContactEntity): Promise<ContactEntity> {
    const newContact = await this.prismaClient.contact.create({
      data: {
        author: contact.author,
        content: contact.content,
      },
    });
    return new ContactEntity(newContact.author, newContact.content);
  }
}
