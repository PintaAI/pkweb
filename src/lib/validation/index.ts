import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'too short'}),
    username: z.string().min(2, {message: 'too short'}),
    email: z.string().email({message: 'invalid email'}),
    password: z.string().min(8, {message: 'too short'}),
  })