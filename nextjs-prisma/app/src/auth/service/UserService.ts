import { ILogin, IUserService, UserEntity } from "../models/userDTO";
import { PrismaUserRepositoy } from "../repository/UserRepository";
import { PasswordService } from "../security/UserSecurity";

export class UserService implements IUserService {
  constructor(
    private readonly repo: PrismaUserRepositoy,
    private readonly passwordService: PasswordService,
  ) {}
  async register(user: ILogin): Promise<UserEntity> {
    const hash = await this.passwordService.hash(user.password);
    const newUser = await this.repo.create(user, hash);
    return new UserEntity(
      newUser.firstname,
      newUser.lastname,
      newUser.username,
      newUser.email,
      newUser.password,
    );
  }

  async login(user: ILogin): Promise<boolean> {
    const dbUser = await this.repo.findByEmail(user.email);
    if (!dbUser) return false;

    return this.passwordService.compare(user.password, dbUser.password);
  }
}
