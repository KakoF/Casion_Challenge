import { getRepository } from "typeorm";
import { User } from "../../../../../domain/entities/User";
import { UserRequestDto } from "../../../../../useCases/user/dto/user-request.dto";
import { IUpdateUserRepository } from "../IUpdateUserRepository";

export class UpdateUserRepository implements IUpdateUserRepository {
    async update(data: UserRequestDto): Promise<User> {
        const userCreate = Object.assign({}, data,
            {
                updateAt: new Date((new Date()).getTime() + 1000)
            })
        const repository = getRepository(User)
        const updateUser = await repository.save(userCreate)
        return updateUser
    }

}