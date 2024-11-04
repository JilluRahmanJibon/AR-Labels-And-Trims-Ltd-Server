import { Router } from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router =Router()


router.post('/create-user', UserControllers.createUser)

router.get('/me',auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.user),UserControllers.getMe)


export const UserRoutes=router