import { Router } from "express";
import { CategoryController } from "./category.controller";


const router =Router()

router.get('/', CategoryController.getCategory)

export const CategoryRoutes = router