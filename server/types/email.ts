export type Email = {
  email: string
  subject: string
  message: string
} & Record<string, string>
