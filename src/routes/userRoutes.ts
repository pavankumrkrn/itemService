import { Router, Request, Response } from "express";
import authenticate from "../authentication/authentication";


const router = Router();

router.get("/users", authenticate, async (req: Request, res: Response) => {

})

router.delete("/delete-user/:userId", authenticate, async (req: Request, res: Response) => {

})

