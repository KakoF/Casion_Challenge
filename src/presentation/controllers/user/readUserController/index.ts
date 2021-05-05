import { ReadUserRepository } from "../../../../data/repositories/user/read/implementation/ReadUserRepository"
import { ReadUserUseCase } from "../../../../useCases/user/readUserUseCase/implementation/ReadUserUseCase"
import { ReadUserController } from "./ReadUserController"

const _repository = new ReadUserRepository()
const _service = new ReadUserUseCase(_repository)
const readUserController = new ReadUserController(_service)

export { readUserController }
