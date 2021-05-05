import { User } from "../../../../domain/entities/User";

export interface IGetUserRepository {
    get(id: string): Promise<User>
}