import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController {
    constructor(
        private GetUsersUseCase: GetUsersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.GetUsersUseCase.getUsers()

            return response.status(200).json(users).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            })
        }
    }
}