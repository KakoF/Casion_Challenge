import { Request, Response } from "express";
import { ICreateUserUseCase } from "../../../../useCases/user/createUserUseCase/ICreateUserUseCase";
import { IUpdateUserUseCase } from "../../../../useCases/user/updateUserUseCase/IUpdateUserUseCase";

export class UpdateUserController {
    private _service: IUpdateUserUseCase
    constructor(service: IUpdateUserUseCase) {
        this._service = service
    }
    async update(req: Request, res: Response) {
        try {
            const data = await this._service.update(req.params.id, req.body)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}