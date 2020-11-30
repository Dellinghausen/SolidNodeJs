import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { IUpdateUserByEmailRequestDTO } from "./UpdateUserDTO";

export class UpdateUserController {
    constructor(
        private UpdateUserUseCase: UpdateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.query as unknown as IUpdateUserByEmailRequestDTO
        const { name } = request.body
        try {
            let user
            if (email) {
                await this.UpdateUserUseCase.updateByEmail(email, name)
            } else {
                return response.status(400).json({
                    message: 'E-mail required!'
                })
            }

            return response.status(204).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            })
        }
    }
}