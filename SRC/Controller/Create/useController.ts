import {Request,Response} from 'express'
import { CreateUserUseCase } from './useUserUseCase'


export class CreateUserController {
    async handle(req: Request, res: Response){
        const {name,email,telefone,endereco,cpf} = req.body

        const createusercontroller = new CreateUserUseCase()

        const result = await createusercontroller.execute({
            name,
            email,
            telefone,
            endereco,
            cpf
        })

        return res.status(200).json(result)
    }
}