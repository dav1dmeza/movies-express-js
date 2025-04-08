import z from 'zod';

const MovieSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1),
  releaseDate: z.string().date(),
  duration: z.number().positive()
})

export default function parseData(data) {
  const result = MovieSchema.safeParse(data);

  if (result.success) {
    return [null, result.data];
  }

  return [result.error.format(), null]
}
