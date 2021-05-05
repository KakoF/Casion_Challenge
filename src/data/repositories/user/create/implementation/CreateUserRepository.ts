import { getRepository } from "typeorm";
import { User } from "../../../../../domain/entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository {
    async create(data: User): Promise<User> {
        const repository = getRepository(User)
        const userCreate = Object.assign({}, data,
            {
                createAt: new Date((new Date()).getTime() + 1000),
                updateAt: null
            })
        const storeUser = await repository.create(userCreate)
        await repository.save(storeUser)
        return storeUser
    }

}