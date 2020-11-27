import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { TypeOrmUsersRepository } from "../../repositories/implementations/TypeOrmUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const typeOrmUsersRepository = new TypeOrmUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()


const createUserUseCase = new CreateUserUseCase(
    typeOrmUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }