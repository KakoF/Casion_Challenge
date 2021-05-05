import { IGetUserRepository } from "../../../../data/repositories/user/get/IGetUserRepository";
import { IUpdateUserRepository } from "../../../../data/repositories/user/update/IUpdateUserRepository";
import { UserRequestDto } from "../../dto/user-request.dto";
import { UserResponseDto } from "../../dto/user-response.dto";
import { IUpdateUserUseCase } from "../IUpdateUserUseCase";

export class UpdateUserUseCase implements IUpdateUserUseCase {
    private _repository: IUpdateUserRepository
    private _getUserRepository: IGetUserRepository
    constructor(repository: IUpdateUserRepository, getUserRepository: IGetUserRepository) {
        this._repository = repository
        this._getUserRepository = getUserRepository
    }
    async update(id: string, data: UserRequestDto): Promise<UserResponseDto> {
        const pastUser = await this._getUserRepository.get(id);
        if (pastUser) {
            const updateUser = { ...pastUser, ...data };
            return UserResponseDto.from(await this._repository.update(updateUser))
        }

        throw new Error("Usuário não encontroado")

    }

}