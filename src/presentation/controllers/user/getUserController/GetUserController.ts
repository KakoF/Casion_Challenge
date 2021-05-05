import { Request, Response } from "express";
import { IGetUserUseCase } from "../../../../useCases/user/getUserUseCase/IGetUserUseCase";

export class GetUserController {
    private _service: IGetUserUseCase
    constructor(service: IGetUserUseCase) {
        this._service = service
    }
    async get(req: Request, res: Response) {
        try {
            const data = await this._service.get(req.params.id)
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}