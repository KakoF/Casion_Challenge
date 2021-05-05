import { Request, Response } from "express";
import { IReadUserUseCase } from "../../../../useCases/user/readUserUseCase/IReadUserUseCase";

export class ReadUserController {
    private _service: IReadUserUseCase
    constructor(service: IReadUserUseCase) {
        this._service = service
    }
    async read(req: Request, res: Response) {
        try {
            const data = await this._service.read()
            return res.json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            })
        }
    }
}