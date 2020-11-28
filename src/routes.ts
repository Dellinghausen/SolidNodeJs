import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { getUserController } from "./useCases/GetUser"
import { getUsersController } from "./useCases/GetUsers"

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

router.get('/user', (request, response) => {
    return getUserController.handle(request, response)
})

router.get('/users', (request, response) => {
    return getUsersController.handle(request, response)
})

export { router }