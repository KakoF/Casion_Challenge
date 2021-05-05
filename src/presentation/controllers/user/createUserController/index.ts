import { CreateUserRepository } from "../../../../data/repositories/user/create/implementation/CreateUserRepository"
import { CreateUserUseCase } from "../../../../useCases/user/createUserUseCase/implementation/CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

const _repository = new CreateUserRepository()
const _service = new CreateUserUseCase(_repository)
const createUserController = new CreateUserController(_service)

export { createUserController }
