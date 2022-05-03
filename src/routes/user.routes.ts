import { Router, Request, Response } from 'express'

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const results: String[] = []

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