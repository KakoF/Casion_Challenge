import { UserRequestDto } from "../dto/user-request.dto";
import { UserResponseDto } from "../dto/user-response.dto";

export interface ICreateUserUseCase {
    create(data: UserRequestDto): Promise<UserResponseDto>
}
