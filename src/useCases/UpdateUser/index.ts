import { TypeOrmUsersRepository } from "../../repositories/implementations/TypeOrmUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository()


const updateUserUseCase = new UpdateUserUseCase(
    typeOrmUsersRepository
)

const updateUserController = new UpdateUserController(
    updateUserUseCase
)

export {updateUserUseCase, updateUserController}