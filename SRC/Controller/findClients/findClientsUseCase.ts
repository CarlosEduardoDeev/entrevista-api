import User from "../../Schema/Users/User";


export class findClientsUseCase {
    async execute(){
            const client = await User.find({})

            return client;
    }
}