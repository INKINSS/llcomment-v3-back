import { z } from 'zod'

export const commentSchema = z.object({
    postId: z.string().min(1),
    authorId: z.string().min(1),
    content: z.string(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

export type Comment = z.infer<typeof commentSchema>