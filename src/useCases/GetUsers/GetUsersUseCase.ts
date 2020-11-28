import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserDTO, IGetUsersResponseDTO } from "./GetUsersDTO";

export class GetUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async getUsers(): Promise<IGetUsersResponseDTO> {
        const users = await this.usersRepository.getUsers()

        const usersResponse = users as IGetUsersResponseDTO;

        return usersResponse
    }
} 