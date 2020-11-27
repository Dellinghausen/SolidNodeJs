import { Request, Response } from "express";
import { IGetUserByEmailRequestDTO } from "./GetUserDTO";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
    constructor(
        private GetUserUseCase: GetUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const GetUserByEmailRequest = request.query as unknown as IGetUserByEmailRequestDTO

        try {
            let user
            if(GetUserByEmailRequest.email){
                user = await this.GetUserUseCase.getByEmail(GetUserByEmailRequest)
            }

            return response.status(200).json(user).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            })
        }
    }
}