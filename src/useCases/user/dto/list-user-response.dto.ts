
import { User } from "../../../domain/entities/User";


export class ListUserResponseDto implements Readonly<ListUserResponseDto> {
    _id: string;
    nome: string;
    email: string;

    public static from(entity: User[]): ListUserResponseDto[] {
        return entity.map(user => {

            const response = new ListUserResponseDto();
            response._id = user._id
            response.nome = user.nome
            response.email = user.email
            return response
        })


    }
}
