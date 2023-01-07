import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true, 
    },
    telefone:{
        type:String,
        required:true,
    },
    endereco:{
        type:String,
        required:true,
    },
    cpf:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("User", User);