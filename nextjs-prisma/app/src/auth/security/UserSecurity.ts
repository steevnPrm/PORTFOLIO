import bcrypt from "bcryptjs";

export interface IPasswordService {
  hash(password: string): Promise<string>;
  compare(password: string, hash: string): Promise<boolean>;
}

export class PasswordService implements IPasswordService {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}
