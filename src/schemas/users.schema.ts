import { z } from 'zod'

export const userSchema = z.object({
    id: z.string().uuid(),
    username: z.string(),
    email: z.string().email(),
    avatar: z.string().url().optional(),
    role: z.enum(['user', 'admin']).default('user'),
    createdAt: z.date().default(() => new Date()),
})

