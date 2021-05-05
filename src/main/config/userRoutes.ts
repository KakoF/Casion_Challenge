import { Request, Response, Router } from 'express'
import { createUserController } from '../../presentation/controllers/user/createUserController'
import { deleteUserController } from '../../presentation/controllers/user/deleteUserController'
import { getUserController } from '../../presentation/controllers/user/getUserController'
import { readUserController } from '../../presentation/controllers/user/readUserController'
import { updateUserController } from '../../presentation/controllers/user/updateUserController'

const userRoutes = Router()

userRoutes.get('/user', (request: Request, response: Response) => {
  return readUserController.read(request, response)
})
userRoutes.post('/user', (request: Request, response: Response) => {
  return createUserController.create(request, response)
})
userRoutes.delete('/user/:id', (request: Request, response: Response) => {
  return deleteUserController.delete(request, response)
})
userRoutes.get('/user/:id', (request: Request, response: Response) => {
  return getUserController.get(request, response)
})
userRoutes.put('/user/:id', (request: Request, response: Response) => {
  return updateUserController.update(request, response)
})

export default userRoutes
