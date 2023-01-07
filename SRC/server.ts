import express,{ NextFunction, Request, Response } from 'express'
import  axios  from 'axios'
import "express-async-errors"
import { router } from '../routes'
import {connectMongo} from './Db/dbconnect'
import {AppError} from './Error/AppError'

const cors = require('cors')
const app = express()



app.use(cors())
app.use(express.json())
app.use(router)



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "Error",
        message: `Internal Server Error: ${err.message}`,
    });
});

connectMongo.then(() =>{
    app.listen(3000, () =>{
        console.log('listening on port 3000')
    })}
)

