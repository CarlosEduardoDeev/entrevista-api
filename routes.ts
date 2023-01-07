import {Router} from 'express'
import { CreateUserController } from './SRC/Controller/Create/useController'
import { DeleteController } from './SRC/Controller/Delete/deleteController'
import { findClientsController } from './SRC/Controller/findClients/findClientsController'
import { AcessController } from './SRC/Controller/Login/acessController'
import { LoginController } from './SRC/Controller/Login/Create/loginController'
import { UpdateController } from './SRC/Controller/Update/updateController'

const router = Router()

const createusercontroller = new CreateUserController()
const findclientscontroller = new findClientsController()
const logincontroller = new LoginController()
const acesscontroller = new AcessController()
const deletecontroller = new DeleteController()
const updatecontroller = new UpdateController()



router.post("/client/",createusercontroller.handle)
router.get("/client/list",findclientscontroller.handle)
router.post("/user/",logincontroller.handle)
router.post("/user/login",acesscontroller.handle)
router.delete("/user/:id",deletecontroller.handle)
router.patch("/user/update/:id",updatecontroller.handle)

export {router}