import { AppError } from "../../Error/AppError";
import User from "../../Schema/Users/User";


interface ICreateUser{
    name: string;
    email: string;
    telefone: string;
    endereco:   string;
    cpf:string;
}

export class CreateUserUseCase{
    async execute({cpf,email,endereco,name,telefone}:ICreateUser){

        const cpfexist = await User.findOne({cpf:cpf})

        if(cpfexist){
            throw new AppError("CPF já existe", 401);
        }

        const result = await User.create({
            name,
            email,
            telefone,
            endereco,
            cpf
        })
        
        return result;

    }
}