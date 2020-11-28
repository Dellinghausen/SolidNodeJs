import { getConnection } from "typeorm";
import { User } from "../../entities/User";
import { IGetUserByEmailResponseDTO } from "../../useCases/GetUser/GetUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class TypeOrmUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const user = await userRepository.findOne({ email: email })

        return user
    }

    async getUsers(): Promise<User[]> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const users = await userRepository.find()

        return users
    }

    async save(user: User): Promise<void> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const userToInsert = new User(user)

        userRepository.insert(userToInsert)
    }

    async updateByEmail(email: string, name: string): Promise<void> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const user = await userRepository.findOne({ email: email })
        user.name = name

        userRepository.save(user)
    }

}