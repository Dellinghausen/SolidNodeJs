import { TypeOrmUsersRepository } from "../../repositories/implementations/TypeOrmUsersRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository()


const getUsersUseCase = new GetUsersUseCase(
    typeOrmUsersRepository
)

const getUsersController = new GetUsersController(
    getUsersUseCase
)

export {getUsersUseCase, getUsersController}