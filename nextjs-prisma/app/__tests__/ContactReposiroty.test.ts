import { ContactRepository } from "../src/contact/repository/ContactRepository"
import { ContactEntity } from "../src/contact/models/ContactDTO"

    let repo : ContactRepository
    const mockPrisma = {
    contact : {
        create : jest.fn()
    }
}

describe('ContactRepository', () => {

    test('créer un nouveau contact' , async () =>{
    repo = new ContactRepository(mockPrisma as any)
    const contact = new ContactEntity('Steven' , 'Hello World');

    mockPrisma.contact.create.mockResolvedValue({
        author : "steven",
        content : "hello world",
    })

    const result = await repo.create(contact)

    expect(result).toBeInstanceOf(ContactEntity)
    expect(result.author).toBe("steven");
    expect(result.content).toBe("hello world");
})


})
