import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const commentSchema = new Schema(
	{
		postId: { type: String, required: true, default: () => uuidv4() },
		authorId: { type: String, required: true },
		content: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{
		versionKey: false,
	},
);

export const CommentModel = mongoose.model(
	'Comment',
	commentSchema,
	'comments',
);
