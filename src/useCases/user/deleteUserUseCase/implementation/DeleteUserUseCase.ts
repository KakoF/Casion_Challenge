import { IDeleteUserRepository } from "../../../../data/repositories/user/delete/IDeleteUserRepository";
import { IGetUserRepository } from "../../../../data/repositories/user/get/IGetUserRepository";
import { IDeleteUserUseCase } from "../IDeleteUserUseCase";

export class DeleteUserUseCase implements IDeleteUserUseCase {
    private _repository: IDeleteUserRepository
    private _getUserRepository: IGetUserRepository
    constructor(repository: IDeleteUserRepository, getUserRepository: IGetUserRepository) {
        this._repository = repository,
            this._getUserRepository = getUserRepository
    }
    async delete(id: string): Promise<boolean> {
        const pastUser = await this._getUserRepository.get(id);
        if (pastUser) {
            return await this._repository.delete(id);
        }
        throw new Error("Usuário não encontroado")
    }

}