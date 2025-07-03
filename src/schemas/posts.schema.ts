import { z } from 'zod';

export const postSchema = z.object({
	authorId: z.string().min(1),
	title: z.string(),
	content: z.string(),
	tags: z.array(z.string()).optional(),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});
