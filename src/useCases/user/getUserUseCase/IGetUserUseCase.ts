import { UserResponseDto } from "../dto/user-response.dto";

export interface IGetUserUseCase {
    get(id: string): Promise<UserResponseDto>
}