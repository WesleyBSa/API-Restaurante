import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    res.json({ nome: 'SmartRestaurant' })
})

export { router };