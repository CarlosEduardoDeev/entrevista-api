
import { Response,Request,NextFunction } from "express"
import { AcessUseCase } from "./acessUseCase"

export class AcessController{
    async handle(req: Request, res: Response,next: NextFunction){
        const { username, password } = req.body

        const acesscontroller = new AcessUseCase()

        const result = await acesscontroller.execute({username, password})
        
        return res.status(200).send(result)
    }
}