import mongoose, { Schema } from 'mongoose';
import { Item } from '../Interfaces/interfaces';

const ItemDb =  mongoose.connection.useDb('Photos');

const itemSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    url : {
        type: String,
        required: true,
    },
    title : {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
});

const ItemModel = ItemDb.model<Item>('Item', itemSchema);

export default ItemModel;