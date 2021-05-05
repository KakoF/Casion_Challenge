import { GetUserRepository } from "../../../../data/repositories/user/get/implementation/GetUserRepository"
import { UpdateUserRepository } from "../../../../data/repositories/user/update/implementation/UpdateUserRepository"
import { UpdateUserUseCase } from "../../../../useCases/user/updateUserUseCase/implementation/UpdateUserUseCase"
import { UpdateUserController } from "./UpdateUserController"

const _repository = new UpdateUserRepository()
const _getRepository = new GetUserRepository()
const _service = new UpdateUserUseCase(_repository, _getRepository)
const updateUserController = new UpdateUserController(_service)

export { updateUserController }
