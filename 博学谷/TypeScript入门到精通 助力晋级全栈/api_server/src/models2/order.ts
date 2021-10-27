// 商品数据模型
import { Document, Schema, Model, model } from 'mongoose';
import { IOrder } from '../interfaces/order';

export interface IOrderModel extends IOrder, Document {
}

export const OrderSchema: Schema = new Schema({
    order_no: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '需要用户ID']
    },
    items: {
        type: [{
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Item',
            },
            unit_price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        required: [true, '需要上票信息列表']
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['handling', 'completed'],
        default: 'handling',
        required: true
    }
}, {
    collection: "orders",
    versionKey: false,
    validateBeforeSave: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export const Order: Model<IOrderModel> = model<IOrderModel>('Order', OrderSchema);