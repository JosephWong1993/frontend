// 商品数据模型
import { Document, Schema, Model, model } from 'mongoose';
import { IItem } from '../interfaces/item';

export interface IItemModel extends IItem, Document {

}

export const ItemSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    pic: {
        type: String,
        required: true
    }
}, {
    collection: "items",
    versionKey: false,
    validateBeforeSave: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export const Item: Model<IItemModel> = model<IItemModel>('Item', ItemSchema);