export class UserRequestDto implements Readonly<UserRequestDto> {
    //_id: string
    nome: string
    email: string

    public static from(dto: Partial<UserRequestDto>) {
        const it = new UserRequestDto();
        //it._id = dto._id;
        it.nome = dto.nome;
        it.email = dto.email;
        if (!it.nome) throw new Error('Nome é campo obrigatório')
        if (!it.email) throw new Error('CNPJ é campo obrigatório')
        return it;
    }
}
