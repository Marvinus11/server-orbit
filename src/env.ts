import z from 'zod'

const envSchema = z.object({
  URL_DB: z.string().url(),
})

export const env = envSchema.parse(process.env)
