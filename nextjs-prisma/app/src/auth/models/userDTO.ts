import prisma from "@/app/lib/prisma";

export class UserEntity {
  constructor(
    public firstname: string,
    public lastname: string,
    public username: string,
    public email: string,
    public password: string,
  ) {}
}

export interface IUserBaseDTO {
  firstname: string;
  lastname: string;
}

export interface IUserRegister extends IUserBaseDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUserContact extends IUserRegister {}

export interface ILogin extends IUserRegister {}

export interface IUserRepository {
  create(data: IUserRegister , hash : string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
}

export interface IUserService {
  register(user: ILogin): Promise<UserEntity>;
  login(user: ILogin): Promise<boolean>;
}
