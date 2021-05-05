import { User } from "../../../../domain/entities/User";

export interface IReadUserRepository {
    read(): Promise<User[]>
}