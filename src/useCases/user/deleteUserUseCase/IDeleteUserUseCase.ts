export interface IDeleteUserUseCase {
    delete(id: string): Promise<boolean>
}