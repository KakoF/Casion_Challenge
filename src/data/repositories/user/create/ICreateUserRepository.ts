import { User } from "../../../../domain/entities/User";

export interface ICreateUserRepository {
    create(data: User): Promise<User>
}