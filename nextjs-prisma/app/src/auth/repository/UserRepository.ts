import { IUserRegister, IUserRepository, UserEntity } from "../models/userDTO";
import prisma from "@/app/lib/prisma";

export class PrismaUserRepositoy implements IUserRepository {
  async create(data: IUserRegister, hash : string): Promise<UserEntity> {
    const addedUser = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        username: data.username,
        password: hash
      },
    });
    return new UserEntity(
      addedUser.firstname,
      addedUser.lastname,
      addedUser.username,
      addedUser.email,
      addedUser.password,
    );
  }
  async findByEmail(email: string): Promise<UserEntity> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");

    return new UserEntity(
      user.firstname,
      user.lastname,
      user.email,
      user.username,
      user.password,
    );
  }

  async findAll(): Promise<UserEntity[]> {
    const allUsers = await prisma.user.findMany();
    return allUsers.map(
      (u) =>
        new UserEntity(
          u.firstname,
          u.lastname,
          u.email,
          u.username,
          u.password,
        ),
    );
  }
}
