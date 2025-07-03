import { z } from 'zod';

export const postSchema = z.object({
	authorId: z.string().min(1, { message: 'el id del autor es requerido' }),
	title: z
		.string()
		.min(3, { message: 'el titulo debe tener al menos 3 caracteres' }),
	content: z
		.string()
		.min(10, { message: 'el contenido debe tener al menos 10 caracteres' }),
	tags: z.array(z.string()).min(1, { message: 'debe tener al menos 1 tag' }),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});

export type Post = z.infer<typeof postSchema>;
