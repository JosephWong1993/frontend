// 商品数据模型
import { Document, Schema, Model, model } from 'mongoose';
import { IUser } from '../interfaces/user';

export interface IUserModel extends IUser, Document {

}

export const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer',
        required: true
    }
}, {
    collection: "users",
    versionKey: false,
    validateBeforeSave: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);