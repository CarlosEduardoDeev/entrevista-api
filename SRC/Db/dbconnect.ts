import mongoose from "mongoose"

mongoose.set("strictQuery", true)

const connectMongo =  
mongoose.connect(`mongodb+srv://kadu:kadu041297@entrevista.btgjod3.mongodb.net/?retryWrites=true&w=majority`)

export {connectMongo}