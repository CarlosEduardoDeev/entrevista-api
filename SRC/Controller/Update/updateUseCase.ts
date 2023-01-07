import User from "../../Schema/Users/User";

interface IUpdate{
    id:string
    name: string;
    email: string;
    telefone: string;
    endereco:   string;
    cpf:string;
}

export class UpdateUseCase {
    async execute({id,name,cpf,email,endereco,telefone}:IUpdate){

        const user = await User.findById(id);

        if(!user){
            throw new Error("User not found");

        }
        const updateList = {
            name,
            email,
            cpf,
            endereco,
            telefone,
        }

        const result = await User.updateOne({_id:id}, updateList)

        return result;


    }
}