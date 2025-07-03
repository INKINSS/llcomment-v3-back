import { z } from 'zod';

export const userSchema = z.object({
	id: z.string().uuid(),
	username: z.string().min(3, {
		message: 'el nombre de usuario debe tener al menos 3 caracteres',
	}),
	email: z.string().email({ message: 'el correo electronico es requerido' }),
	avatar: z.string().url().optional(),
	role: z.enum(['user', 'admin']).default('user'),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});

export type User = z.infer<typeof userSchema>;
