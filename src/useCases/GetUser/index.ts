import { TypeOrmUsersRepository } from "../../repositories/implementations/TypeOrmUsersRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository()


const getUserUseCase = new GetUserUseCase(
    typeOrmUsersRepository
)

const getUserController = new GetUserController(
    getUserUseCase
)

export {getUserUseCase, getUserController}