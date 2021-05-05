import { getRepository } from "typeorm";
import { User } from "../../../../../domain/entities/User";
import { IGetUserRepository } from "../IGetUserRepository";

export class GetUserRepository implements IGetUserRepository {
    async get(id: string): Promise<User> {
        const repository = getRepository(User)
        const data = await repository.findOne(id)
        if (!data)
            throw new Error("Registro não encontrado")
        return data
    }
}