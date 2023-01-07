import LoginUser from "../../Schema/loginUser/LoginUser";
import {compare} from 'bcrypt'
import { AppError } from "../../Error/AppError";

interface IAcess{
    username: string;
    password: string;

}
export class AcessUseCase{
    async execute({username,password}:IAcess){

        const user = await LoginUser.findOne({username:username})
        
        if(!user){
            throw new AppError("username ou password not found",401)
        
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError("password not match",401)
        }
        
        return user
    }

}