import { Request,Response } from "express";
import { findClientsUseCase } from "./findClientsUseCase";


export class findClientsController {
    async handle(req: Request, res: Response){

        const findclientscontroller = new findClientsUseCase()

        const result = await findclientscontroller.execute()

        return res.status(200).send(result)

    }
}