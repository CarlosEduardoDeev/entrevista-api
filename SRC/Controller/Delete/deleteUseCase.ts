import User from "../../Schema/Users/User"

interface IDelete{
    id:string
}


export class DeleteUseCase{
    async execute({id}:IDelete){
        
        const user = await User.findById(id);
        
        if(!user){
            throw new Error("User not found");

        }

        const result = await User.deleteOne({user});

        return result

    }
}