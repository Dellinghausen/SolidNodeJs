import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserByEmailRequestDTO, IGetUserByEmailResponseDTO } from "./GetUserDTO";

export class GetUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async getByEmail(data: IGetUserByEmailRequestDTO): Promise<IGetUserByEmailResponseDTO> {
        const user = await this.usersRepository.findByEmail(data.email)

        const userByEmailResponse = user as IGetUserByEmailResponseDTO;

        return userByEmailResponse
    }
}