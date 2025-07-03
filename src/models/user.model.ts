import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema(
	{
		id: { type: String, required: true, default: () => uuidv4() },
		username: { type: String, required: true },
		email: { type: String, required: true },
		avatar: { type: String },
		role: { type: String, enum: ['user', 'admin'], default: 'user' },
		createdAt: { type: Date, default: Date.now },
	},
	{
		versionKey: false,
	},
);

const UserModel = mongoose.model('User', userSchema, 'users');

export default UserModel;
