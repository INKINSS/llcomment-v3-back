import { z } from 'zod';

export const reactionSchema = z.object({
	postId: z.string().min(1, { message: 'el id del post es requerido' }),
	authorId: z.string().min(1, { message: 'el id del autor es requerido' }),
	type: z.enum(['like', 'dislike', 'share', 'love']).default('like'),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});

export type Reaction = z.infer<typeof reactionSchema>;
