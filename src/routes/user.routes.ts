import { Router, Request, Response } from 'express'
import User, { UserMap } from '../models/User'
import db from '../config/db'

const router = Router();

UserMap(db)

router.get('/', async (req: Request, res: Response) => {
    const results = await User.findAll()

    return res.status(200).json({
        message: "Success",
        data: results
    })
})

router.get('/:id', async (req: Request, res: Response) => {
    const singleResult = await User.findByPk(Number(req.params.id))

    if (!singleResult) {
        return res.status(401).json({
            message: 'Resource not found'
        })
    }

    return res.status(200).json({
        message: "Success",
        data: singleResult
    })
})

router.post('/', async (req: Request, res: Response) => {
    let newUser : any = req.body as User;

    const result = await User.create(newUser);

    res.status(201).json({ user: result });
})

export default router