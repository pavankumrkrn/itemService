import express, { Request, Response } from 'express';
import { router } from './routes/itemRoutes';
import { connectDB } from './config/db';
const cookieParser = require('cookie-parser');


const cors = require('cors');

const app = express();
const port = 4002;

app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  
}));

app.use(cookieParser());


app.use("/items", router)



app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

connectDB();
