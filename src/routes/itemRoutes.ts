import { Router, Request, Response } from 'express';
import authenticate from '../authentication/authentication';
import ItemModel from '../models/item';
import { Item } from '../Interfaces/interfaces';
const cors = require('cors');



export const router = Router();

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  
}))


router.get("/itemDetail/:itemId", authenticate, async (req: Request, res: Response) => {

});

router.get("/itemslist", authenticate, async (req: Request, res: Response) => {

    try {
        const listOfItems = await ItemModel.find({
            userId: req.cookies.userId
        }).lean();  

        const items: Array<Item> = listOfItems as Array<Item>;

        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Failed to fetch items' });
    }
});

router.post("/createItem", authenticate,  async (req: Request, res: Response) => {

    console.log("Hi in route")

    const { title, url, thumbnailUrl } = req.body

    const item = new ItemModel({
        userId: req.cookies.userId,
        title,
        url,
        thumbnailUrl
    })

    try {
        await item.save();
        res.status(201).json({
            status: "ok"
        })

    } catch (error: any) {
        console.log(error)
        res.status(400).json({ status: "failed", message: 'Something went wrong', error: error?.message });
    }
})

router.put("/updateItem/:itemId", authenticate, async (req: Request, res: Response) => {

})

router.delete("/deleteItem/:itemid", authenticate, async (req: Request, res: Response) => {

})