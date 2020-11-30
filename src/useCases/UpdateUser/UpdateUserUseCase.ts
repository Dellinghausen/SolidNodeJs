import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async updateByEmail(email: string, name: string): Promise<void> {
        await this.usersRepository.updateByEmail(email, name)
    }
}