import mongoose, { Schema } from 'mongoose';

export const reactionSchema = new Schema(
	{
		postId: { type: String, required: true },
		authorId: { type: String, required: true },
		type: {
			type: String,
			enum: ['like', 'dislike', 'share', 'love'],
			default: 'like',
		},
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{
		versionKey: false,
	},
);

const ReactionModel = mongoose.model('Reaction', reactionSchema, 'reactions');

export default ReactionModel;
