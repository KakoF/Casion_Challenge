import { GetUserRepository } from "../../../../data/repositories/user/get/implementation/GetUserRepository"
import { GetUserUseCase } from "../../../../useCases/user/getUserUseCase/implementation/GetUserUseCase"
import { GetUserController } from "./GetUserController"

const _repository = new GetUserRepository()
const _service = new GetUserUseCase(_repository)
const getUserController = new GetUserController(_service)

export { getUserController }
