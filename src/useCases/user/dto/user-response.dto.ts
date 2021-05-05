import { User } from "../../../domain/entities/User";

export class UserResponseDto implements Readonly<UserResponseDto> {
    _id: string;
    nome: string;
    email: string;
    createAt: Date;
    updateAt: Date;

    public static from(entity: User): UserResponseDto {
        const response = new UserResponseDto();
        response._id = entity._id
        response.nome = entity.nome
        response.email = entity.email
        response.createAt = entity.createAt
        response.updateAt = entity.updateAt
        return response
    }
}
