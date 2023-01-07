import {Request,Response} from "express"
import { DeleteUseCase } from "./deleteUseCase"

export class DeleteController {
    async handle(req: Request, res: Response){
        const{id} = req.params

        const deletecontroller = new DeleteUseCase()

        const result = await deletecontroller.execute({id})

        return res.status(200).send(result)

    }
}