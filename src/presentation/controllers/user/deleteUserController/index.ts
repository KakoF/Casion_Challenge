import { DeleteUserRepository } from "../../../../data/repositories/user/delete/implementation/DeleteUserRepository"
import { GetUserRepository } from "../../../../data/repositories/user/get/implementation/GetUserRepository"
import { DeleteUserUseCase } from "../../../../useCases/user/deleteUserUseCase/implementation/DeleteUserUseCase"
import { DeleteUserController } from "./DeleteUserController"

const _repository = new DeleteUserRepository()
const _getRepository = new GetUserRepository()
const _service = new DeleteUserUseCase(_repository, _getRepository)
const deleteUserController = new DeleteUserController(_service)

export { deleteUserController }
