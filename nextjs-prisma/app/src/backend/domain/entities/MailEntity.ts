export class MailEntity {
  constructor(
    private readonly email: string,
    private readonly message: string,
  ) {}

  getData() {
    return {
      email: this.email,
      message: this.message,
    };
  }
}
