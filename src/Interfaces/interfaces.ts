import { Document } from "mongoose";

export interface Item extends Document {
    id: string,
    url: string,
    title: string,
    thumbnailUrl: string,
}

export interface User extends Document {
    name: string,
    email: string,
    password: string
}