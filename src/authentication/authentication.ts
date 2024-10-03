import { Request, Response, NextFunction } from "express"
import axios from 'axios';


const authorize = () => {

}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

    const response = await axios.get('http://localhost:4000/auth/check',
        {
            headers: {
                Cookie: `token=${req.cookies.token}`  
            },
            withCredentials: true
        }
    );
    try {
        if(response.data.status === 'ok') {
            next()
        } else {
            res.status(403).json({
                status : "failed"
            })
        }
        
    } catch (error) {
        res.status(403).json({
            status : "failed"
        })
    }
}

export default authenticate 