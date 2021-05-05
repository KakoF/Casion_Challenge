import { IReadUserRepository } from "../../../../data/repositories/user/read/IReadUserRepository";
import { ListUserResponseDto } from "../../dto/list-user-response.dto";
import { IReadUserUseCase } from "../IReadUserUseCase";

export class ReadUserUseCase implements IReadUserUseCase {
    private _repository: IReadUserRepository
    constructor(repository: IReadUserRepository) {
        this._repository = repository
    }
    async read(): Promise<ListUserResponseDto[]> {
        const data = await this._repository.read()
        return ListUserResponseDto.from(data);
    }

}