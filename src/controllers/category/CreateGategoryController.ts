import { Request, Response } from "express";
import { CreateGategoryService } from "../../services/category/CreateGategoryService";

class CreateGategoryController{
    async handle(req: Request, res:Response){
        const { name } = req.body;

        const createCategoryService = new CreateGategoryService;

        const category = await createCategoryService.execute({
            name
        });
        res.json(category);
    }
}

export { CreateGategoryController }