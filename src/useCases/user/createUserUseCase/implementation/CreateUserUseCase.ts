import { ICreateUserRepository } from "../../../../data/repositories/user/create/ICreateUserRepository"
import { User } from "../../../../domain/entities/User"
import { UserRequestDto } from "../../dto/user-request.dto"
import { UserResponseDto } from "../../dto/user-response.dto"
import { ICreateUserUseCase } from "../ICreateUserUseCase"


export class CreateUserUseCase implements ICreateUserUseCase {
    private _repository: ICreateUserRepository
    constructor(repository: ICreateUserRepository) {
        this._repository = repository
    }

    async create(data: UserRequestDto): Promise<UserResponseDto> {
        const user = await UserRequestDto.from(data)
        const newUser = new User(user.nome, user.email)
        const createUser = await this._repository.create(newUser)
        return UserResponseDto.from(createUser)
    }
}
