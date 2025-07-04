import mongoose, { Schema } from 'mongoose';

export const postSchema = new Schema(
	{
		authorId: { type: String, required: true },
		title: { type: String, required: true },
		content: { type: String, required: true },
		tags: { type: [String], required: true },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{
		versionKey: false,
	},
);

export const PostModel = mongoose.model('Post', postSchema, 'posts');
