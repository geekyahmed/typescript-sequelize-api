import { Router, Request, Response } from 'express'
import User, { UserMap } from '../models/User'
import db from '../config/db'

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    UserMap(db)
    const results = await User.findAll()

    res.status(200).json({
        message: "Success",
        data: results
    })
})

router.get('/:id', async (req: Request, res: Response) => {
    const singleResult: String = ''

    res.status(200).json({
        message: "Success",
        data: singleResult
    })
})

router.post('', async (req: Request, res: Response) => {
    // const singleResult: String = ''

    res.status(200).json({
        message: "Success",
        data: {}
    })
})

export default router