import { getRepository } from "typeorm";
import { User } from "../../../../../domain/entities/User";
import { IReadUserRepository } from "../IReadUserRepository";

export class ReadUserRepository implements IReadUserRepository {
    async read(): Promise<User[]> {
        const repository = getRepository(User)
        const users = await repository.find()
        return users
    }

}
