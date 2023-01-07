import {Request,Response} from "express"
import { UpdateUseCase } from "./updateUseCase";

export class UpdateController{
    async handle(req: Request, res: Response){

        const {id} = req.params;
        const {name,cpf,email,endereco,telefone} = req.body

        const updatecontroller =  new UpdateUseCase()

        const result = await updatecontroller.execute({
            cpf,email,endereco,telefone,id,name
        })

        return res.status(200).send(result)


    }
}