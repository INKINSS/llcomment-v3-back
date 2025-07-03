import { z } from 'zod';

export const commentSchema = z.object({
	postId: z.string().min(1, { message: 'el id del post es requerido' }),
	authorId: z.string().min(1, { message: 'el id del autor es requerido' }),
	content: z.string().min(1, { message: 'el contenido es requerido' }),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});

export type Comment = z.infer<typeof commentSchema>;
