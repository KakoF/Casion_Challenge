import { UserRequestDto } from "../dto/user-request.dto";
import { UserResponseDto } from "../dto/user-response.dto";

export interface IUpdateUserUseCase {
    update(id: string, data: UserRequestDto): Promise<UserResponseDto>
}