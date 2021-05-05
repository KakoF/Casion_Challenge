import { Request, Response } from "express";
import { IDeleteUserUseCase } from "../../../../useCases/user/deleteUserUseCase/IDeleteUserUseCase";

export class DeleteUserController {
    private _service: IDeleteUserUseCase
    constructor(service: IDeleteUserUseCase) {
        this._service = service
    }
    async delete(req: Request, res: Response) {
        try {
            const data = await this._service.delete(req.params.id)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}