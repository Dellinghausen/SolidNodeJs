import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    save(user: User): Promise<void>
    getUsers(): Promise<User[]>
    updateByEmail(email: string, name: string): Promise<void>
}