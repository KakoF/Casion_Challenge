import { Request, Response } from "express";
import { ICreateUserUseCase } from "../../../../useCases/user/createUserUseCase/ICreateUserUseCase";

export class CreateUserController {
    private _service: ICreateUserUseCase
    constructor(service: ICreateUserUseCase) {
        this._service = service
    }
    async create(req: Request, res: Response) {
        try {
            const data = await this._service.create(req.body)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}