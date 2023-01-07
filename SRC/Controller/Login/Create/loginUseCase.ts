import LoginUser from "../../../Schema/loginUser/LoginUser";
import { hash } from "bcrypt";

interface ILoginCreate{
    username: string;
    password: string;

}

export class LoginUseCase {
    async execute({username,password}:ILoginCreate){

    const passwordHash = await hash(password,10)

        const result = await LoginUser.create(
            {
            username,
            password:passwordHash
            });

        return result;


    }
}