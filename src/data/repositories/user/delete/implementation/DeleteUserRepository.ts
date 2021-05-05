import { getRepository } from "typeorm";
import { User } from "../../../../../domain/entities/User";
import { IDeleteUserRepository } from "../IDeleteUserRepository";

export class DeleteUserRepository implements IDeleteUserRepository {
    async delete(id: string): Promise<boolean> {
        const repository = getRepository(User)
        await repository.delete(id)
        if (id)
            return true;
        return false;
    }

}