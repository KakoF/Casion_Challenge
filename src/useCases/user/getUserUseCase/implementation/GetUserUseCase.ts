import { IGetUserRepository } from "../../../../data/repositories/user/get/IGetUserRepository";
import { UserResponseDto } from "../../dto/user-response.dto";
import { IGetUserUseCase } from "../IGetUserUseCase";

export class GetUserUseCase implements IGetUserUseCase {
    private _repository: IGetUserRepository
    constructor(repository: IGetUserRepository) {
        this._repository = repository
    }
    async get(id: string): Promise<UserResponseDto> {
        const data = await this._repository.get(id);
        return UserResponseDto.from(data)
    }

}
