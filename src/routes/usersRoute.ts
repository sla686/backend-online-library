import {Request, Response, Router } from "express"

const userRoute = Router()
userRoute.get ('/', (req: Request, res: Response) =>{
    res.send('Get route from userRoute')
})
userRoute.post('/', (req: Request, res: Response)=>{
    res.send('Post route from userRoute')
})
export default userRoute
