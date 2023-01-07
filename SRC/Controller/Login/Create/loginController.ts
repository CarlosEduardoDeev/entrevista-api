import { LoginUseCase } from "./loginUseCase"
import { Response,Request } from "express"

export class LoginController{
    async handle(req: Request, res: Response){
        const { username, password } = req.body

        const logincontroller = new LoginUseCase()

        const result = await logincontroller.execute({username, password})

        return res.status(200).send(result)
    }
}