import { User } from "../../../../domain/entities/User";
import { UserRequestDto } from "../../../../useCases/user/dto/user-request.dto";

export interface IUpdateUserRepository {
    update(data: UserRequestDto): Promise<User>
}