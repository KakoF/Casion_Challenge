import { ListUserResponseDto } from "../dto/list-user-response.dto";

export interface IReadUserUseCase {
    read(): Promise<ListUserResponseDto[]>
}