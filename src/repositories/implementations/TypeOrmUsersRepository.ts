import { getConnection } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class TypeOrmUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const user = await userRepository.findOne({ email: email })

        return user
    }

    async save(user: User): Promise<void> {
        const connection = getConnection();
        const userRepository = connection.getRepository(User)

        const userToInsert = new User(user)

        userRepository.insert(userToInsert)
    }
}